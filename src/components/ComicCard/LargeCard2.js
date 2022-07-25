import className from 'classnames/bind';
import styles from './ComicCard.module.scss';

import Button from '~/components/Button/Button';
import imageSmall from '~/assets/images/hucau-small.svg';
import imagelarge from '~/assets/images/hucau-large.svg';

const cx = className.bind(styles);

function LargeCard2() {
    return (
        <div className={cx('wrapper-large-2')}>
            <div className={cx('list-image')}>
                <img
                    src={imageSmall}
                    alt="#"
                    width={'60px'}
                    style={{
                        border: '3px solid var(--primary)',
                        borderRadius: '6px',
                    }}
                />
                <img src={imageSmall} alt="#" width={'60px'} />
                <img src={imageSmall} alt="#" width={'60px'} />
                <img src={imageSmall} alt="#" width={'60px'} />
                <img src={imageSmall} alt="#" width={'60px'} />
                <img src={imageSmall} alt="#" width={'60px'} />
                <img src={imageSmall} alt="#" width={'60px'} />
                <img src={imageSmall} alt="#" width={'60px'} />
            </div>
            <div className={cx('content-wrapper')}>
                <span className={cx('main-image')}>
                    <img src={imagelarge} alt="#" width={'124px'} />
                </span>
                <div className={cx('card-body')}>
                    <a href="/" className={cx('content-title')}>
                        Kinh nghiệm cảnh nóng
                    </a>
                    <a href="/" className={cx('content-category')}>
                        Boy Love
                    </a>
                    <span className={cx('content-summary')}>
                        Tae Gyum sau khi phát hiện mình là một Alpha trội gặp tai họa khi vô tình khiến một Omega phát
                        tình, cậu trở nên né tránh là một Alpha trội gặp tai họa khi vô tình khiến một Omega phát tình,
                        cậu trở nên né tránh
                    </span>
                    <Button primary small>
                        Đọc ngay
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LargeCard2;
