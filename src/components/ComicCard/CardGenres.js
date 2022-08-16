import { faClockFour } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useState } from 'react';
import { faEye, faHeart, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CardGenres.module.scss';

const cx = classNames.bind(styles);

function CardGenres({ cardGenres, nameCate }) {
    const [comicFollow, setComicFollow] = useState([]);

    const handleFollow = () => {
        checkFollow(cardGenres.id);
        alert(`Đã thêm truyện ${cardGenres.name} vào danh sách yêu thích`);
        followListApi();
    };
    const handleUnfollow = () => {
        unfollow(cardGenres.id);
        alert(`Đã bỏ truyện ${cardGenres.name} khỏi danh sách yêu thích`);
        followListApi();
    };

    const unfollow = async (id) => {
        try {
            const json = JSON.stringify({
                userId: '12443',
                bookId: id,
            });
            await axios.post(`https://apicocomic.herokuapp.com/rest/Service/unfollow-book`, json, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {}
    };

    const checkFollow = async (idF) => {
        const json = {
            userId: '12443',
            bookId: idF,
        };
        await axios.post(`https://apicocomic.herokuapp.com/rest/Service/follow-book`, json, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };
    const followListApi = async () => {
        try {
            const res = await axios.get(`https://apicocomic.herokuapp.com/rest/Service/user-follow-list`, {
                params: {
                    userId: 12443,
                },
            });
            setComicFollow(res.data);
        } catch (error) {}
    };
    useEffect(() => {
        followListApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <Link to={`/comic/${cardGenres?.name}/${cardGenres.id}`}>
                <img src={cardGenres.image} className={cx('img')} alt={''} />
            </Link>
            <span className={cx('content')}>
                <Link to={`/comic/${cardGenres?.name}/${cardGenres.id}`}>
                    <div className={cx('title')}>{cardGenres.name}</div>
                </Link>
                <div className={cx('category')}>{cardGenres.category || nameCate}</div>
                <Link to={`/comic/${cardGenres?.name}/${cardGenres.id}`}>
                    <div className={cx('description')}>{cardGenres.description}</div>
                </Link>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faEye} />
                    {/* &nbsp; để chèn một khoảng trống. */}
                    &nbsp;
                    <span className={cx('icon-view')}>{cardGenres.viewNo}</span>
                    <FontAwesomeIcon icon={faHeart} />
                    &nbsp;
                    <span className={cx('icon-follow')}>{cardGenres.followNo}</span>
                    <FontAwesomeIcon icon={faClockFour} />
                    &nbsp;
                    <span className={cx('icon-date')}>{cardGenres.createDate}</span>
                </div>
                <span className={cx('btn-follow')}>
                    {comicFollow?.find((item) => item.id === cardGenres.id) !== undefined ? (
                        <span onClick={handleUnfollow}>ĐÃ YÊU THÍCH</span>
                    ) : (
                        <span onClick={handleFollow}>
                            <FontAwesomeIcon icon={faSquarePlus} />
                            {/* &ensp; để chèn 2 khoảng trống. */}
                            &ensp;YÊU THÍCH
                        </span>
                    )}
                </span>
            </span>
        </div>
    );
}

export default CardGenres;
