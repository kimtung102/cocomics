import className from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/images/logo.svg';
import avatar from '~/assets/images/comic-image.svg';
import categoryIcon from '~/assets/images/category-icon.svg';
import bxhIcon from '~/assets/images/bxh-icon.svg';
import Button from '~/components/Button/Button';
import Modal from '~/components/Modal/Modal';
import Search from '~/components/Search/Search';
import { useRecoilState } from 'recoil';
import { userAuth } from '~/states/userState';
import { popupState } from '~/states/popupState';
import Tippy from '@tippyjs/react/headless';

const cx = className.bind(styles);

function Header() {
    const [popup, setPopup] = useRecoilState(popupState);
    const [currentUser, setCurrentUser] = useRecoilState(userAuth);

    const handleLoginShow = () => {
        setPopup(1);
    };

    const handleSignInShow = () => {
        setPopup(2);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left-block')}>
                    <div className={cx('logo')}>
                        <img src={logo} alt="logo" />
                    </div>
                    <Tippy
                        interactive
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className={cx('category-popover')} tabIndex="-1" {...attrs}>
                                <p className={cx('category-column')}>
                                    <a href="/">Romance</a>
                                    <a href="/">Romance</a>
                                    <a href="/">Romance</a>
                                </p>
                                <p className={cx('category-column')}>
                                    <a href="/">Romance</a>
                                    <a href="/">Romance</a>
                                    <a href="/">Romance</a>
                                </p>
                                <p className={cx('category-column')}>
                                    <a href="/">Romance</a>
                                    <a href="/">Romance</a>
                                    <a href="/">Romance</a>
                                </p>
                            </div>
                        )}
                    >
                        <div className={cx('header-item')}>
                            <img src={categoryIcon} alt="categoryIcon" className={cx('icon')} />
                            <span className={cx('title')}>Thể loại</span>
                        </div>
                    </Tippy>
                    <div className={cx('header-item')}>
                        <img src={bxhIcon} alt="bxhIcon" className={cx('icon')} />
                        <span className={cx('title')}>BXH</span>
                    </div>
                    <Search />
                </div>
                {currentUser ? (
                    <Tippy
                        interactive
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className={cx('user-popover')} tabIndex="-1" {...attrs}>
                                <div className={cx('info')}>
                                    <img src={avatar} alt="nguyen van a" className={cx('user-avatar')}></img>
                                    <div className={cx('info-text')}>
                                        <p className={cx('username')}>thedc123233</p>
                                        <p className={cx('id')}>ID: 12213001023</p>
                                    </div>
                                </div>
                                <p className={cx('option')}>
                                    <a href="/">Thông tin cá nhân</a>
                                    <a href="/">Yêu thích</a>
                                    <a href="/">Lịch sử đọc</a>
                                    <a href="/">Cài đặt</a>
                                    <a href="/">Đăng xuất</a>
                                </p>
                            </div>
                        )}
                    >
                        <img src={avatar} alt="nguyen van a" className={cx('user-avatar')}></img>
                    </Tippy>
                ) : (
                    <div className={cx('right-block')}>
                        <Button primary onClick={handleLoginShow}>
                            Đăng nhập
                        </Button>
                        <Button rounded onClick={handleSignInShow}>
                            Đăng ký
                        </Button>
                    </div>
                )}
            </div>
            <Modal popup={popup} />
        </div>
    );
}

export default Header;
