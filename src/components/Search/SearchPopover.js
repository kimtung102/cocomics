import className from 'classnames/bind';
import styles from './Search.module.scss';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function SearchPopover({ data }) {
    return (
        <Link to={`/comic/${data.name}/${data.id}`} className={cx('list-item')}>
            <img src={data.image} alt="avatar" className={cx('search-avatar')} />
            <div className={cx('search-info')}>
                <p className={cx('info-title')}>{data.name}</p>
                <p className={cx('info-category')}>{data.category}</p>
            </div>
        </Link>
    );
}

export default SearchPopover;
