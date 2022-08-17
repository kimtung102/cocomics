import React, { useState, createContext, useEffect, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import styles from './Favorite.module.scss';
import Button from '~/components/Button/Button';
import CardFavorite from '~/components/ComicCard/CardFavorite';
import CardRecomment from '~/components/ComicCard/CardRecomment';
import CardHistory from '~/components/ComicCard/CardHistory';
import Header from '~/layouts/Header/Header';
import noFavorite from '~/assets/images/noFavorite.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export const HideComponent = createContext();

const pages = [
    {
        label: ' Yêu thích',
        value: true,
        classNames: 'btn-favorite',
    },
    {
        label: 'Lịch sử',
        value: false,
        classNames: 'btn-history',
    },
];

function Favorite() {
    const [hide, setHide] = useState(true);
    const [active, setActive] = useState(pages[0]);
    const [comicFavorite, setComicFavorite] = useState([]);
    const [numberComicFav, setNumberComicFav] = useState();
    const [numberComicHistory, setNumberComicHistory] = useState();
    const [cardRecommentData, setCardRecommentData] = useState([]);
    const [pageChoose, setPageChoose] = useState(true);
    const [comicHistory, setComicHistory] = useState([]);
    const [callBack, setCallBack] = useState(false);

    const idHis = [];
    comicHistory.map((item) => idHis.push(item.id));
    const idDelHis = idHis.join();
    const handleDeleteHistory = () => {
        if (window.confirm('Bạn có muốn xóa toàn bộ lịch sử đọc truyện ?')) {
            deleteComicHistoryApi(idDelHis);
            comicHistoryApi();
        }
    };
    const handleDelete = () => {
        setHide(false);
    };
    const handleCancel = () => {
        setHide(true);
    };
    const followListApi = async () => {
        try {
            const res = await axios.get(`https://apicocomic.herokuapp.com/rest/Service/user-follow-list`, {
                params: {
                    userId: 12443,
                },
            });
            setComicFavorite(res.data);
            setNumberComicFav(res.data.length);
        } catch (error) {}
    };
    const listViewApi = async () => {
        try {
            const res = await axios.get(`https://apicocomic.herokuapp.com/rest/Service/comic-rank-view-no`, {
                params: {
                    orderType: 1,
                    top: 10,
                },
            });
            setCardRecommentData(res.data);
        } catch (error) {}
    };
    const comicHistoryApi = async () => {
        try {
            const res = await axios.get(`https://apicocomic.herokuapp.com/rest/Service/user-read-history`, {
                params: {
                    userId: 12243,
                },
            });
            setComicHistory(res.data);
            setNumberComicHistory(res.data.length);
        } catch (error) {}
    };
    const deleteComicHistoryApi = async (idDelHis) => {
        try {
            const json = {
                userId: '12243',
                readId: idDelHis,
            };
            const res = await axios.delete(
                `https://apicocomic.herokuapp.com/rest/Service/delete-read-history`,
                { data: json },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            console.log(res);
            if (res.data.id === '1') {
                comicHistoryApi();
            }
        } catch (error) {}
    };
    useEffect(() => {
        followListApi();
    }, [numberComicFav, callBack]);
    useEffect(() => {
        listViewApi();
        comicHistoryApi();
    }, []);
    return (
        <HideComponent.Provider value={hide}>
            <Header />
            <div className={cx('wrapper')}>
                <h1 className={cx('title')}>truyện của tôi</h1>
                <div className={cx('head')}>
                    <div className={cx('head-btn')}>
                        {pages.map((page) => (
                            <Button
                                key={page.index}
                                className={cx(page.classNames)}
                                onClick={() => {
                                    setActive(page);
                                    setPageChoose(page.value);
                                }}
                                underline
                                choose={active === page}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </div>
                    {pageChoose ? (
                        <Fragment>
                            {!(numberComicFav === 0) && (
                                <Button className={cx('btn-delete')} underline onClick={handleDelete}>
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Xóa
                                </Button>
                            )}
                            <span className={cx('btn-del-active')}>
                                <Button className={cx('btn-cancel')} underline hide={hide} onClick={handleCancel}>
                                    Hủy
                                </Button>
                                <Button className={cx('btn-done')} underline hide={hide} onClick={handleCancel}>
                                    Xong
                                </Button>
                            </span>
                        </Fragment>
                    ) : (
                        <Fragment>
                            {!(numberComicHistory === 0) && (
                                <Button className={cx('btn-delete')} underline onClick={handleDeleteHistory}>
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Xóa tất cả lịch sử
                                </Button>
                            )}
                        </Fragment>
                    )}
                </div>
            </div>

            {pageChoose ? (
                <div>
                    {numberComicFav === 0 ? (
                        <div className={cx('noFavorite')}>
                            <div className={cx('head-img')}>
                                <img className={cx('img')} src={noFavorite} alt={''} />
                                <h1>Rất tiếc!</h1>
                                <p className={cx('p')}>
                                    Chúng tôi có thể gặp một số khó khăn khi tìm ra trang này. Vui lòng thử lại hoặc
                                    <Link to={'/'}> Quay lại trang chủ</Link>
                                </p>
                            </div>
                            <div className={cx('container-fluid')}>
                                <h3 className={cx('recomment')}>Một số truyện gợi ý: </h3>
                                <div className={cx('card-recomment')}>
                                    {cardRecommentData?.map((data) => (
                                        <CardRecomment key={data.id} cardRecomment={data} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('wrapper')}>
                            <div className={cx('card-favorite')}>
                                {comicFavorite?.map((data) => (
                                    <CardFavorite
                                        key={data.id}
                                        cardFavorite={data}
                                        callBack={callBack}
                                        setCallBack={setCallBack}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    {numberComicHistory === 0 ? (
                        <div className={cx('noFavorite')}>
                            <div className={cx('head-img')}>
                                <img className={cx('img')} src={noFavorite} alt={''} />
                                <h1>Rất tiếc!</h1>
                                <p className={cx('p')}>
                                    Chúng tôi có thể gặp một số khó khăn khi tìm ra trang này. Vui lòng thử lại hoặc
                                    <Link to={'/'}> Quay lại trang chủ</Link>
                                </p>
                            </div>
                            <div className={cx('container-fluid')}>
                                <h3 className={cx('recomment')}>Một số truyện gợi ý: </h3>
                                <div className={cx('card-recomment')}>
                                    {cardRecommentData?.map((data) => (
                                        <CardRecomment key={data.id} cardRecomment={data} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('wrapper')}>
                            <div className={cx('card-history')}>
                                {comicHistory?.map((data) => (
                                    <CardHistory key={data.id} cardHistory={data} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </HideComponent.Provider>
    );
}

export default Favorite;
