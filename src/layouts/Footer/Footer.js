import className from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = className.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('overlay')}></div>
            <div className={cx('footer-inner')}>
                <p className={cx('content-1')}>Giới thiệu về chúng tôi | Điều khoản sử dụng | Điều kiện bảo mật</p>
                <h1>Cocomics</h1>
                <p className={cx('content-2')}>
                    Tầng 14 , Tòa VTC, 23 P. Lạc Trung, Vĩnh Tuy, Hai Bà Trưng, Hà Nội, Việt Nam
                </p>
                <p className={cx('content-3')}>
                    Hỗ trợ : cocomics@gmail.com | Liên hệ : 0353443200 hoặc contact@cocomics.vn
                </p>
                <div className={cx('list-icon')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </span>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </span>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </span>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </span>
                </div>
                <div className={cx('content-4')}>
                    <span className={cx('copyright')}>
                        <FontAwesomeIcon icon={faCopyright} />
                    </span>
                    <p className={cx('content')}> 2022 COCOMICS</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
