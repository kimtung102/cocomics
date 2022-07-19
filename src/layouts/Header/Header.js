import className from 'classnames/bind';
import styles from './Header.module.scss';

const cx = className.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>inner</div>
        </div>
    );
}

export default Header;
