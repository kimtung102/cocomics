import className from 'classnames/bind';
import styles from './Search.module.scss';

const cx = className.bind(styles);

function SearchPopover({ data }) {
    return (
        <div className={cx('list-item')}>
            <img src={data.image} alt="avatar" className={cx('search-avatar')} />
            <div className={cx('search-info')}>
                <p className={cx('info-title')}>{data.name}</p>
                <p className={cx('info-category')}>{data.category}</p>
            </div>
        </div>
    );
}

export default SearchPopover;
