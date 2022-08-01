import className from 'classnames/bind';
import styles from './ComicCard.module.scss';

import image from '~/assets/images/comic-image-2.svg';

const cx = className.bind(styles);

function RankCard({ data, rank }) {
    return (
        <div className={cx('wrapper-rank-card')}>
            <a href="/" className={cx('card-image')}>
                <img src={data?.image || image} alt="thumnail" />
            </a>
            <span className={cx('card-stt')}>{`0${rank}` || '00'}</span>
            <div className={cx('content')}>
                <a href="/" className={cx('title')}>
                    {data?.name || 'Gia sư của công tước'}
                </a>
                <a href="/" className={cx('category')}>
                    {data?.category || 'Manhwa'}
                </a>
            </div>
        </div>
    );
}

export default RankCard;
