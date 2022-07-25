import className from 'classnames/bind';
import styles from './Search.module.scss';

import searchIcon from '~/assets/images/search-icon.svg';

const cx = className.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <span className={cx('search-icon')}>
                <img src={searchIcon} alt="searchIcon" />
            </span>
            <input type="text" id="search" name="search" placeholder="Tìm kiếm..."></input>
        </div>
    );
}

export default Search;
