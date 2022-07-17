import className from 'classnames/bind';
import styles from './Modal.module.scss';
import logo from '~/assets/images/logo.png';
import Button from '../Button/Button';

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
                            <Button secondary>Đăng nhập với Google</Button>
                            <Button secondary gg>
                                Đăng nhập với Google
                            </Button>
                            <Button secondary fb>
                                Đăng nhập với Google
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
