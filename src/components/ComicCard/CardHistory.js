import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardHistory.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardHistory({ cardHistory }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={`/comic/${cardHistory?.name}/${cardHistory.id}`}>
                <img className={cx('img')} src={cardHistory.image} />
            </Link>
            <span className={cx('content')}>
                <Link to={`/comic/${cardHistory?.name}/${cardHistory.id}`} className={cx('title')}>
                    {cardHistory.name}
                </Link>
                <div className={cx('category')}>{cardHistory.category}</div>
                <Link to={`/comic/${cardHistory?.name}/${cardHistory.id}`} className={cx('description')}>
                    {cardHistory.description}
                </Link>
                <div className={cx('star-rate')}>
                    <FontAwesomeIcon icon={faEye} /> <span>{cardHistory.viewNo}</span>
                </div>
                <div>
                    <Link to={`/comic/${cardHistory?.name}/${cardHistory.id}`} className={cx('link-read')} href="">
                        Tiếp tục đọc &gt;&gt;
                    </Link>
                </div>
            </span>
        </div>
    );
}

export default CardHistory;
