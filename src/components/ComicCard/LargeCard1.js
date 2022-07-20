import className from 'classnames/bind';
import styles from './ComicCard.module.scss';

import image from '~/assets/images/comic-image.svg';

const cx = className.bind(styles);

function LargeCard1() {
    return (
        <div className={cx('wrapper-large-1')}>
            <div className={cx('image')}>
                <img src={image} alt="thumnail" />
            </div>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <a href="/" className={cx('title')}>
                        Giấc Mộng Đêm Hè
                    </a>
                    <a href="/" className={cx('category')}>
                        Romance - Admin
                    </a>
                </div>
                <span className={cx('summary')}>
                    Đã bao giờ bạn tự hỏi liệu người bạn thích có đang mơ về bạn không? Với khả năng đi vào giấc mơ của
                    người khác, cô giáo Yeoreum Han không cần phải đoán: cô ấy có thể biến nó thành hiện thực. Cô ấy
                    thậm chí có thể kết nối giấc mơ của hai người với nhau và sử dụng khả năng này để chơi trò chơi mai
                    mối cho học sinh của mình
                </span>
            </div>
        </div>
    );
}

export default LargeCard1;
