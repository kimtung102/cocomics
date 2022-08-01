import className from 'classnames/bind';
import styles from './ComicCard.module.scss';

import image from '~/assets/images/comic-image-2.svg';

const cx = className.bind(styles);

function SmallCard2({ data }) {
    return (
        <div className={cx('wrapper-small-2')}>
            <a href="/" className={cx('card-image')}>
                <img src={data?.image || image} alt="thumnail" />
            </a>
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

export default SmallCard2;
