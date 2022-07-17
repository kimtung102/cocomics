import className from 'classnames/bind';
import styles from './Modal.module.scss';
import logo from '~/assets/images/logo.png';
import Button from '../Button/Button';
import googleLogo from '~/assets/images/googleLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const cx = className.bind(styles);

function Modal() {
    return (
        <div className={cx('modal')}>
            <div className={cx('modal-overlay')}></div>
            <div className={cx('modal-body')}>
                <div className={cx('modal-linear')}>
                    <div className={cx('modal-inner')}>
                        <div className={cx('inner-header')}>
                            <img src={logo} alt="logo"></img>
                            <p className={cx('header')}>Chào mừng đến với Cocomics</p>
                            <p className={cx('sub-header')}>
                                Truy cập hàng tấn tiểu thuyết và truyện tranh chỉ bằng một lần nhấn
                            </p>
                        </div>
                        <div className={cx('inner-body')}>
                            <Button primary>Đăng nhập</Button>
                            <Button secondary>Đăng nhập</Button>
                            <Button secondary gg leftIcon={<img src={googleLogo} alt="gglogo" width={'25px'}></img>}>
                                Đăng nhập với Google
                            </Button>
                            <Button secondary fb leftIcon={<FontAwesomeIcon icon={faFacebook} />}>
                                Đăng nhập với Facebook
                            </Button>
                        </div>
                        <div>
                            <p>Không có tài khoản?</p>
                            <Button text>Tạo tài khoản</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
