import className from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/images/logo.svg';
import avatar from '~/assets/images/comic-image.svg';
import categoryIcon from '~/assets/images/category-icon.svg';
import bxhIcon from '~/assets/images/bxh-icon.svg';
import Button from '~/components/Button/Button';
import Modal from '~/components/Modal/Modal';
import Search from '~/components/Search/Search';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { userAuth, userIdState, userInfoState } from '~/states/userState';
import { popupState } from '~/states/popupState';
import Tippy from '@tippyjs/react/headless';
import { useEffect } from 'react';
import { get } from '~/utils/httpRequest';
import { Link, useNavigate } from 'react-router-dom';

import { categoryState } from '~/states/categoryState';

const cx = className.bind(styles);

function Header({ relative = false }) {
    const [popup, setPopup] = useRecoilState(popupState);
    const [isLogin, setIsLogin] = useRecoilState(userAuth);
    const [category, setCategory] = useRecoilState(categoryState);
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);
    const userId = useRecoilValue(userIdState);

    const navigate = useNavigate();

    useEffect(() => {
        const getCategory = async () => {
            const res = await get('/category-list');
            setCategory(res);
        };

        getCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const getUserInfo = async () => {
            const res = await get('/cms-search-user', {
                params: {
                    userId,
                },
            });
            console.log(res);
            setUserInfo(res[0]);
        };

        if (userId !== '') {
            getUserInfo();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogin]);

    const handleLoginShow = () => {
        setPopup(1);
    };

    const handleSignInShow = () => {
        setPopup(2);
    };

    const handleChangePasswordShow = (e) => {
        e.preventDefault();
        setPopup(3);
    };
    const handleSignOut = (e) => {
        e.preventDefault();
        window.localStorage.clear();
        setIsLogin(false);
        navigate('/');
    };

    return (
        <div className={cx('wrapper', relative && 'relative-wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left-block')}>
                    <Link to="/" className={cx('logo')}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <Tippy
                        interactive
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className={cx('category-popover')} tabIndex="-1" {...attrs}>
                                {category.map((item) => (
                                    <Link to={`/category/${item.name}`} className={cx('category-item')} key={item.id}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    >
                        <Link to="/genres" className={cx('header-item')}>
                            <img src={categoryIcon} alt="categoryIcon" className={cx('icon')} />
                            <span className={cx('title')}>Thể loại</span>
                        </Link>
                    </Tippy>
                    <Link to="/ranking" className={cx('header-item')}>
                        <img src={bxhIcon} alt="bxhIcon" className={cx('icon')} />
                        <span className={cx('title')}>BXH</span>
                    </Link>
                    <Search />
                </div>
                {isLogin ? (
                    <Tippy
                        interactive
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className={cx('user-popover')} tabIndex="-1" {...attrs}>
                                <div className={cx('info')}>
                                    <img
                                        src={userInfo?.nickName || avatar}
                                        alt="nguyen van a"
                                        className={cx('user-avatar')}
                                    ></img>
                                    <div className={cx('info-text')}>
                                        <p className={cx('username')}>{userInfo?.username}</p>
                                        <p className={cx('id')}>ID: {userInfo?.id}</p>
                                    </div>
                                </div>
                                <p className={cx('option')}>
                                    <Link to="/user">Thông tin cá nhân</Link>
                                    <Link to="/favourite">Yêu thích</Link>
                                    <Link to="/favourite">Lịch sử đọc</Link>
                                    <a href="/" onClick={(e) => handleChangePasswordShow(e)}>
                                        Đổi mật khẩu
                                    </a>
                                    <Link to="/setup">Cài đặt</Link>
                                    <a href="/" onClick={(e) => handleSignOut(e)}>
                                        Đăng xuất
                                    </a>
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
