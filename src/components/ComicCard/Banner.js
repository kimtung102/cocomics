import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Banner.module.scss';

const cx = className.bind(styles);

function Banner({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-linear')}>
                <div className={cx('banner-content')}>
                    <Link to={`/comic/${data?.name}/${data?.bookId}`} className={cx('content-header')}>
                        Vạn Cổ Tối Cường Tông
                    </Link>
                    <span className={cx('content-summary')}>
                        Tae Gyum sau khi phát hiện mình là một Alpha trội gặp tai họa khi vô tình khiến một Omega phát
                        tình, cậu trở nên né tránh họa khi vô tình khiến một Omega phát tình, cậu trở nên né tránh khi
                        vô tình khiến một Omega phát tình, cậu trở nên né tránh
                    </span>
                    <Link to={`/category/${data?.category}`} className={cx('content-category')}>
                        Romance - Admin
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;
