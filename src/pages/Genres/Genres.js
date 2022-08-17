import React, { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Genres.module.scss';
import Header from '~/layouts/Header/Header';
import Button from '~/components/Button/Button';
import axios from 'axios';
import CardGenres from '~/components/ComicCard/CardGenres';

const cx = classNames.bind(styles);

const status = [
    { label: 'Tất cả', id: 1 },
    { label: 'Hoàn thiện', id: 2 },
    { label: 'Đang viết', id: 3 },
];
const sortBy = [
    { label: 'Lượt thích', id: 1, value: 'byFollow' },
    { label: 'Lượt xem', id: 2, value: 'viewNo' },
    { label: 'Theo ngày', id: 3, value: 'byDate' },
    { label: 'Theo tên', id: 4, value: 'byName' },
];

function Genres() {
    const [listCate, setListCate] = useState([]);
    const [idCate, setIdCate] = useState('1');
    const [nameCate, setNameCate] = useState();
    const [idStatus, setIdStatus] = useState(1);
    const [idSortBy, setIdSortBy] = useState(1);
    const [reRender, setReRender] = useState(false);
    const [cardGenres, setCardGenres] = useState([]);
    const [allComic, setAllComic] = useState([]);
    const [filterAllChooseFirst, setFilterAllChooseFirst] = useState(true);
    const [numberPage] = useState(1);
    const [sortByFilter, setSortByFilter] = useState(1);
    const postPage = 10;

    const nameDescending = [...cardGenres].sort((a, b) => (a.name > b.name ? 1 : -1));
    const handleSortBy = (idFilter) => {
        switch (idFilter) {
            case 1:
                setSortByFilter(1);
                setReRender(!reRender);
                break;
            case 2:
                setSortByFilter(2);
                setReRender(!reRender);
                break;
            case 3:
                setSortByFilter(3);
                setReRender(!reRender);
                break;
            case 4:
                setCardGenres(nameDescending);
                break;
            default:
        }
    };

    const listCardGenres = async () => {
        try {
            const res = await axios.get(`https://apicocomic.herokuapp.com/rest/Service/search-comic-by-cate`, {
                params: {
                    cateId: idCate,
                    orderBy: sortByFilter,
                },
            });
            setCardGenres(res.data);
        } catch (error) {}
    };
    const listAllComic = async () => {
        try {
            const res = await axios.get(`https://apicocomic.herokuapp.com/rest/Service/comic-list`, {
                params: {
                    size: postPage,
                    page: numberPage,
                },
            });
            setAllComic(res.data);
        } catch (error) {}
    };

    useEffect(() => {
        listCardGenres();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idCate, reRender]);

    const listCategory = async () => {
        try {
            const res = await axios.get(`https://apicocomic.herokuapp.com/rest/Service/category-list`);
            setListCate(res.data);
        } catch (error) {}
    };
    listCate[0] = { id: '1', name: 'Tất cả' };
    listCate[17] = { id: '3', name: 'Hành động' };
    console.log('adad', listCate[0]);
    useEffect(() => {
        listCategory();

        console.log('4');
    }, []);
    useEffect(() => {
        listAllComic();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numberPage]);
    return (
        <Fragment>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('side-bar')}>
                    <h3 className={cx('h3')}>Thể loại</h3>
                    <ul className={cx('ul')}>
                        {listCate?.map((item) => (
                            <Button
                                className={cx('btn-category')}
                                key={item.id}
                                noOutline
                                active={idCate === item.id || (idCate === 1 && item.id === 1)}
                                onClick={() => {
                                    setIdCate(item.id);
                                    setNameCate(item.name);
                                    setFilterAllChooseFirst(false);
                                    if (item.id === 1) {
                                        setFilterAllChooseFirst(true);
                                    }
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </ul>
                </div>
                <div className={cx('content')}>
                    <div className={cx('title')}>Sắp xếp theo</div>

                    <div className={cx('status')}>
                        <h4 className={cx('h4')}>Trạng thái</h4>
                        {status.map((item) => (
                            <Button
                                className={cx(item.id === idStatus ? 'btn-status-choose' : 'btn-status')}
                                key={item.id}
                                onClick={() => {
                                    setIdStatus(item.id);
                                }}
                                outline
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>
                    <div className={cx('sort-by')}>
                        <h5 className={cx('h5')}>Sắp xếp theo</h5>
                        {sortBy.map((item) => (
                            <Button
                                className={cx(item.id === idSortBy ? 'btn-sort-by-choose' : 'btn-sort-by')}
                                key={item.id}
                                onClick={() => {
                                    setIdSortBy(item.id);
                                    handleSortBy(item.id);
                                }}
                                outline
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>
                    <div className={cx('result')}>
                        {filterAllChooseFirst
                            ? allComic?.map((data) => (
                                  <CardGenres key={data.id} cardGenres={data} nameCate={nameCate} />
                              ))
                            : cardGenres?.map((data) => (
                                  <CardGenres key={data.id} cardGenres={data} nameCate={nameCate} />
                              ))}
                    </div>
                    {/* <div>
                        {filterAllChooseFirst ? (
                            <Paginations
                                postsPage={postPage}
                                totalPosts={191}
                                numberPage={numberPage}
                                setNumberPage={setNumberPage}
                            />
                        ) : (
                            <Paginations
                                postsPage={postPage}
                                totalPosts={cardGenres.length}
                                numberPage={numberPage}
                                setNumberPage={setNumberPage}
                            />
                        )}
                    </div> */}
                </div>
            </div>
        </Fragment>
    );
}

export default Genres;
