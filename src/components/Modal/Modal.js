import className from 'classnames/bind';
import styles from './Modal.module.scss';
import logo from '~/assets/images/logo.png';
import arrow from '~/assets/images/arrow-left.png';
import Button from '../Button/Button';
import googleLogo from '~/assets/images/googleLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const cx = className.bind(styles);

function Modal({ show, type, popup }) {
    if (!show) {
        return null;
    } else
        return (
            <div className={cx('modal')}>
                <div className={cx('modal-overlay')}></div>
                <div className={type === 1 ? cx('modal-body') : cx('modal-body-2')}>
                    <div className={cx('modal-linear')}>
                        {popup === 2 && (
                            <div className={cx('popup-title')}>
                                <span className={cx('back')}>
                                    <img src={arrow} alt="arrow" width={'24px'}></img>
                                </span>
                                <p className={cx('title')}>Đăng nhập với email</p>
                            </div>
                        )}
                        <span className={cx('cancel')}>
                            <FontAwesomeIcon icon={faXmark} />
                        </span>
                        <div className={cx('modal-inner')}>
                            {type === 1 && (
                                <div className={cx('inner-header')}>
                                    <img src={logo} alt="logo" className={cx('logo')}></img>
                                    <p className={cx('header')}>Chào mừng đến với Cocomics</p>
                                    <p className={cx('sub-header')}>
                                        Truy cập hàng tấn tiểu thuyết và truyện tranh chỉ bằng một lần nhấn
                                    </p>
                                </div>
                            )}
                            <div className={cx('inner-body')}>
                                {type === 1 && (
                                    <>
                                        <Button
                                            secondary
                                            gg
                                            leftIcon={<img src={googleLogo} alt="gglogo" width={'25px'}></img>}
                                        >
                                            Đăng nhập với Google
                                        </Button>
                                        <Button secondary leftIcon={<FontAwesomeIcon icon={faFacebook} />}>
                                            Đăng nhập với Facebook
                                        </Button>
                                    </>
                                )}
                            </div>
                            <div className={cx('inner-sign')}>
                                {type === 1 && (
                                    <>
                                        <p className={cx('sign-text')}>Không có tài khoản?</p>
                                        <Button text>Tạo tài khoản</Button>
                                    </>
                                )}
                            </div>
                            <div className={cx('inner-bottom')}>
                                <span className={cx('copyright')}>
                                    <FontAwesomeIcon icon={faCopyright} />
                                </span>
                                <p className={cx('content')}>
                                    {' '}
                                    2022 Cocomics | Điều khoản dịch vụ | Chính sách bảo mật
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Modal;
