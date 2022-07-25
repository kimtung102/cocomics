import className from 'classnames/bind';
import styles from './Banner.module.scss';

const cx = className.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-linear')}>
                <div className={cx('banner-content')}>
                    <a href="/" className={cx('content-header')}>
                        Vạn Cổ Tối Cường Tông
                    </a>
                    <span className={cx('content-summary')}>
                        Tae Gyum sau khi phát hiện mình là một Alpha trội gặp tai họa khi vô tình khiến một Omega phát
                        tình, cậu trở nên né tránh họa khi vô tình khiến một Omega phát tình, cậu trở nên né tránh khi
                        vô tình khiến một Omega phát tình, cậu trở nên né tránh
                    </span>
                    <a href="/" className={cx('content-category')}>
                        Romance - Admin
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
