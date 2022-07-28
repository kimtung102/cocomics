import className from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '~/assets/images/comic-image.svg';

import searchIcon from '~/assets/images/search-icon.svg';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import SearchPopover from './SearchPopover';

const cx = className.bind(styles);

function Search() {
    return (
        <Tippy
            interactive
            placement="bottom"
            render={(attrs) => (
                <div className={cx('search-popover')} {...attrs}>
                    <SearchPopover />
                    <SearchPopover />
                    <SearchPopover />
                </div>
            )}
        >
            <div className={cx('search')}>
                <img src={searchIcon} alt="searchIcon" className={cx('search-icon')} />
                <input type="text" id="search" name="search" placeholder="Tìm kiếm..."></input>
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
            </div>
        </Tippy>
    );
}

export default Search;
