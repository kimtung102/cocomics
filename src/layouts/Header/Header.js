import className from 'classnames/bind';
import styles from './Header.module.scss';

const cx = className.bind(styles);

function Header() {
    return <div className={cx('wrapper')}>header</div>;
}

export default Header;
