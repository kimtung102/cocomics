import className from 'classnames/bind';
import styles from './ComicCard.module.scss';

import image from '~/assets/images/comic-image.svg';

const cx = className.bind(styles);

function SmallCard1() {
    return (
        <div className={cx('wrapper-small-1')}>
            <a href="/" className={cx('card-image')}>
                <img src={image} alt="thumnail" width={'95px'} />
            </a>
            <a href="/" className={cx('title')}>
                Gia Sư Của Công Tước
            </a>
            <a href="/" className={cx('category')}>
                Đam mỹ
            </a>
        </div>
    );
}

export default SmallCard1;
