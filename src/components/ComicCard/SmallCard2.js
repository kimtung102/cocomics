import className from 'classnames/bind';
import styles from './ComicCard.module.scss';

import image from '~/assets/images/comic-image-2.svg';

const cx = className.bind(styles);

function SmallCard2() {
    return (
        <div className={cx('wrapper-small-2')}>
            <a href="/" className={cx('card-image')}>
                <img src={image} alt="thumnail" />
            </a>
            <div className={cx('content')}>
                <a href="/" className={cx('title')}>
                    Gia Sư Của Công Tước
                </a>
                <a href="/" className={cx('category')}>
                    Đam mỹ
                </a>
            </div>
        </div>
    );
}

export default SmallCard2;
