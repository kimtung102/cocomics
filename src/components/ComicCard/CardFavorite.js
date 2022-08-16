import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import styles from './CardFavorite.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { HideComponent } from '../../pages/Favorite/Favorite';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardFavorite({ cardFavorite, callBack, setCallBack }) {
    const hide = useContext(HideComponent);
    // const [bookIdArr, setBookIdArr] = useState([]);
    const [choose, setChoose] = useState(true);

    const handleDeleteFavorite = async (id) => {
        setChoose(false);
        if (window.confirm('Bạn có muốn bỏ yêu thích truyện này?')) {
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
                setCallBack(!callBack);
            } catch (error) {}
        } else {
            setChoose(true);
        }
    };

    return (
        <div className={cx(choose ? 'wrapper' : 'wrapper-choose')}>
            <div className={cx('img-icon')}>
                {!hide && (
                    <FontAwesomeIcon
                        className={cx('delete-icon')}
                        icon={faMinus}
                        onClick={() => handleDeleteFavorite(cardFavorite.id)}
                    />
                )}
                <img
                    className={cx('solid')}
                    src="https://img2.thuthuatphanmem.vn/uploads/2019/01/19/hinh-anh-mau-den-cho-dien-thoai-full-hd_030503435.jpg"
                    alt={''}
                />
                <Link to={`/comic/${cardFavorite?.name}/${cardFavorite.id}`}>
                    <img className={cx('img')} src={cardFavorite.image} alt={''} />
                </Link>
            </div>
            <Link to={`/comic/${cardFavorite?.name}/${cardFavorite.id}`}>
                <div className={cx('title')}>{cardFavorite.name}</div>
            </Link>
            <div className={cx('reader')}>
                <span>Đã đọc : </span>
                <span>1/400</span>
            </div>
        </div>
    );
}

export default CardFavorite;
