import className from 'classnames/bind';
import styles from './Modal.module.scss';
import arrow from '~/assets/images/arrow-left.png';
import Button from '../Button/Button';
import backIcon from '~/assets/images/back-icon.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import { popupState } from '~/states/popupState';

const cx = className.bind(styles);

function Modal({ popup }) {
    const [p, setP] = useRecoilState(popupState);

    if (popup === 0) {
        return null;
    } else
        return (
            <div className={cx('modal')}>
                <div className={cx('modal-overlay')}></div>
                <div className={cx('modal-body')}>
                    <div className={cx('modal-linear')}>
                        {popup === 1 && (
                            <div className={cx('popup-title')}>
                                <span className={cx('back')} onClick={() => setP(0)}>
                                    <img src={arrow} alt="arrow" width={'20px'}></img>
                                </span>
                                <p className={cx('title')}>Đăng nhập</p>
                            </div>
                        )}
                        {popup === 2 && (
                            <div className={cx('popup-title')}>
                                <span className={cx('back')} onClick={() => setP(1)}>
                                    <img src={arrow} alt="arrow" width={'20px'}></img>
                                </span>
                                <p className={cx('title')}>Đăng ký</p>
                            </div>
                        )}
                        {popup === 3 && (
                            <div className={cx('popup-title')}>
                                <span className={cx('back')} onClick={() => setP(2)}>
                                    <img src={arrow} alt="arrow" width={'20px'}></img>
                                </span>
                                <p className={cx('title')}>Quên mật khẩu</p>
                            </div>
                        )}
                        <span className={cx('cancel')} onClick={() => setP(0)}>
                            <img src={backIcon} alt="back" width={'17px'}></img>
                        </span>
                        <div className={cx('modal-inner')}>
                            {popup === 2 && (
                                <div className={cx('form-wrapper')}>
                                    <div className={cx('form-item')}>
                                        <label htmlFor="username" className={cx('label')}>
                                            Tên đăng nhập
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            className={cx('input')}
                                        ></input>
                                    </div>
                                    <div className={cx('form-item')}>
                                        <label htmlFor="password" className={cx('label')}>
                                            Mật khẩu
                                        </label>
                                        <br />
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className={cx('input')}
                                        ></input>
                                    </div>
                                    <div className={cx('form-item')}>
                                        <label htmlFor="confirmPassword" className={cx('label')}>
                                            Nhập lại mật khẩu
                                        </label>
                                        <br />
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            className={cx('input')}
                                        ></input>
                                    </div>

                                    <div className={cx('btn-signup')}>
                                        <Button large>Đăng ký</Button>
                                    </div>
                                </div>
                            )}
                            {popup === 1 && (
                                <div className={cx('form-wrapper')}>
                                    <div className={cx('form-item')}>
                                        <label htmlFor="username" className={cx('label')}>
                                            Tên đăng nhập/ Email
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            className={cx('input')}
                                        ></input>
                                    </div>
                                    <div className={cx('form-item')}>
                                        <label htmlFor="password" className={cx('label')}>
                                            Mật khẩu
                                        </label>
                                        <br />
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className={cx('input')}
                                        ></input>
                                    </div>

                                    <div className={cx('btn-signup')}>
                                        <Button large>Đăng Nhập</Button>
                                        <div className={cx('btn-forgot')}>
                                            <Button text onClick={() => setP(3)}>
                                                Quên mật khẩu?
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {popup === 3 && (
                                <div className={cx('form-wrapper')}>
                                    <div className={cx('form-item')}>
                                        <label htmlFor="username" className={cx('label')}>
                                            Tên đăng nhập
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            className={cx('input')}
                                        ></input>
                                    </div>
                                    <div className={cx('form-item')}>
                                        <label htmlFor="email" className={cx('label')}>
                                            Địa chỉ email
                                        </label>
                                        <br />
                                        <input type="text" id="email" name="email" className={cx('input')}></input>
                                    </div>
                                    <div className={cx('btn-signup')}>
                                        <Button large>Xác nhận</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={cx('inner-sign')}>
                            {popup === 1 && (
                                <>
                                    <p className={cx('sign-text')}>Chưa có tài khoản?</p>
                                    <Button text onClick={() => setP(2)}>
                                        Đăng ký
                                    </Button>
                                </>
                            )}
                            {popup === 2 && (
                                <>
                                    <p className={cx('sign-text')}>Đã có tài khoản?</p>
                                    <Button text onClick={() => setP(1)}>
                                        Đăng nhập
                                    </Button>
                                </>
                            )}
                        </div>
                        <div className={cx('inner-bottom')}>
                            <span className={cx('copyright')}>
                                <FontAwesomeIcon icon={faCopyright} />
                            </span>
                            <p className={cx('content')}> 2022 Cocomics | Điều khoản dịch vụ | Chính sách bảo mật</p>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Modal;
