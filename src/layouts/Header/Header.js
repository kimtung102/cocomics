import { useState } from 'react';
import className from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/images/logo.png';
import categoryIcon from '~/assets/images/category-icon.png';
import bxhIcon from '~/assets/images/bxh-icon.png';
import Button from '~/components/Button/Button';
import Modal from '~/components/Modal/Modal';
import Search from '~/components/Search/Search';

const cx = className.bind(styles);

function Header() {
    const [show, setShow] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left-block')}>
                    <div className={cx('logo')}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={cx('header-item')}>
                        <img src={categoryIcon} alt="categoryIcon" className={cx('icon')} />
                        <span className={cx('title')}>Thể loại</span>
                    </div>
                    <div className={cx('header-item')}>
                        <img src={bxhIcon} alt="bxhIcon" className={cx('icon')} />
                        <span className={cx('title')}>BXH</span>
                    </div>
                    <Search />
                </div>
                <div className={cx('right-block')}>
                    <Button primary onClick={() => setShow(true)}>
                        Đăng nhập
                    </Button>
                </div>
            </div>
            <Modal show={show} type={2} popup={{ id: 3, header: 'Đăng ký với email' }} />
        </div>
    );
}

export default Header;
