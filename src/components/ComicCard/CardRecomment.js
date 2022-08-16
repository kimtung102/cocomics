import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardRecomment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardRecomment({ cardRecomment }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={`/comic/${cardRecomment?.name}/${cardRecomment.id}`}>
                <img className={cx('img')} src={cardRecomment.image} />
            </Link>
            <span className={cx('content')}>
                <Link to={`/comic/${cardRecomment?.name}/${cardRecomment.id}`} className={cx('title')}>
                    {cardRecomment.name}
                </Link>
                <div className={cx('category')}>{cardRecomment.category}</div>
                <p className={cx('description')}>{cardRecomment.description}</p>
                <div className={cx('star-rate')}>
                    <FontAwesomeIcon icon={faEye} /> <span>{cardRecomment.viewNo}</span>
                </div>
            </span>
        </div>
    );
}

export default CardRecomment;
