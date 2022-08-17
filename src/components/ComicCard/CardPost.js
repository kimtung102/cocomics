import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import styles from './CardPost.module.scss';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardPost({ cardPost, stt }) {
    const [comicFollow, setComicFollow] = useState([]);
    const handleFollow = () => {
        checkFollow(cardPost.id);
        alert(`Đã thêm truyện ${cardPost.name} vào danh sách yêu thích`);
        followListApi();
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
    const handleUnfollow = () => {
        unfollow(cardPost.id);
        alert(`Đã bỏ truyện ${cardPost.name} khỏi danh sách yêu thích`);
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
    return (
        <div className={cx('card')}>
            <div className={cx('card-body')}>
                <div className={cx('stt')}>{stt < 9 ? `00${stt + 1}` : `0${stt + 1}`}</div>
                <Link to={`/comic/${cardPost?.name}/${cardPost.id}`}>
                    <img src={cardPost.image} className={cx('img')} alt={''} />
                </Link>
                <div className={cx('content')}>
                    <div className={cx('tag')}>
                        <span>{cardPost.category}</span>
                    </div>
                    <Link to={`/comic/${cardPost?.name}/${cardPost.id}`} className={cx('title')}>
                        {cardPost.name}
                    </Link>
                    <p className={cx('description')}>{cardPost.description}</p>
                    <div className={cx('detail')}>
                        <FontAwesomeIcon icon={faHeart} />
                        <span className={cx('like')}>{cardPost.followNo}</span>
                        <span className={cx('autor')}>admin</span>
                    </div>
                </div>

                <div className={cx('btn')}>
                    <div>
                        <Button circle>
                            {comicFollow?.find((item) => item.id === cardPost.id) !== undefined ? (
                                <div onClick={handleUnfollow}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </div>
                            ) : (
                                <div onClick={handleFollow}>
                                    <FontAwesomeIcon icon={faAdd} />
                                </div>
                            )}
                        </Button>
                    </div>
                    <Link to={`/comic/${cardPost?.name}/${cardPost.id}`} className={cx('title')}>
                        <Button className={cx('btn-read')} primary>
                            ĐỌC
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardPost;
