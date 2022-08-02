import className from 'classnames/bind';
import styles from './LargeCard2.module.scss';

import Button from '~/components/Button/Button';
import image1 from '~/assets/images/large-card-2/1.jpg';
import image2 from '~/assets/images/large-card-2/2.jpg';
import image3 from '~/assets/images/large-card-2/3.jpg';
import image4 from '~/assets/images/large-card-2/4.jpg';
import image5 from '~/assets/images/large-card-2/5.jpg';
import image6 from '~/assets/images/large-card-2/6.jpg';
import image7 from '~/assets/images/large-card-2/7.jpg';
import image8 from '~/assets/images/large-card-2/8.jpg';
import image9 from '~/assets/images/large-card-2/9.jpg';
import { useState } from 'react';

const cx = className.bind(styles);

function LargeCard2() {
    const [index, setIndex] = useState(1);

    return (
        <div className={cx('wrapper-large-2')}>
            <div className={cx('list-image')}>
                <span className={cx('image-item', index === 1 ? 'active' : 'noActive')}>
                    <img src={image1} alt="#" onClick={() => setIndex(1)} />
                </span>
                <span className={cx('image-item', index === 2 ? 'active' : 'noActive')}>
                    <img src={image2} alt="#" onClick={() => setIndex(2)} />
                </span>
                <span className={cx('image-item', index === 3 ? 'active' : 'noActive')}>
                    <img src={image3} alt="#" onClick={() => setIndex(3)} />
                </span>
                <span className={cx('image-item', index === 4 ? 'active' : 'noActive')}>
                    <img src={image4} alt="#" onClick={() => setIndex(4)} />
                </span>
                <span className={cx('image-item', index === 5 ? 'active' : 'noActive')}>
                    <img src={image5} alt="#" onClick={() => setIndex(5)} />
                </span>
                <span className={cx('image-item', index === 6 ? 'active' : 'noActive')}>
                    <img src={image6} alt="#" onClick={() => setIndex(6)} />
                </span>
                <span className={cx('image-item', index === 7 ? 'active' : 'noActive')}>
                    <img src={image7} alt="#" onClick={() => setIndex(7)} />
                </span>
                <span className={cx('image-item', index === 8 ? 'active' : 'noActive')}>
                    <img src={image8} alt="#" onClick={() => setIndex(8)} />
                </span>
                <span className={cx('image-item', index === 9 ? 'active' : 'noActive')}>
                    <img src={image9} alt="#" onClick={() => setIndex(9)} />
                </span>
            </div>
            <div className={cx('content-wrapper')}>
                <span className={cx('main-image')}>
                    <img src={image1} alt="#" />
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
