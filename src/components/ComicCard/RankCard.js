import className from 'classnames/bind';
import styles from './ComicCard.module.scss';

import image from '~/assets/images/comic-image-2.svg';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function RankCard({ data, rank }) {
    return (
        <div className={cx('wrapper-rank-card')}>
            <Link to={`/comic/${data?.name}/${data?.bookId}`} className={cx('card-image')}>
                <img src={data?.image || image} alt="thumnail" />
            </Link>
            <span className={cx('card-stt')}>{`0${rank}` || '00'}</span>
            <div className={cx('content')}>
                <Link to={`/comic/${data?.name}/${data?.bookId}`} className={cx('title')}>
                    {data?.name || 'Gia sư của công tước'}
                </Link>
                <Link to={`/category/${data?.category}`} className={cx('category')}>
                    {data?.category || 'Manhwa'}
                </Link>
            </div>
        </div>
    );
}

export default RankCard;
