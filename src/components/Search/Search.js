import className from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '~/assets/images/comic-image.svg';

import searchIcon from '~/assets/images/search-icon.svg';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

const cx = className.bind(styles);

function Search() {
    return (
        <Tippy
            interactive
            placement="bottom"
            render={(attrs) => (
                <div className={cx('search-popover')} {...attrs}>
                    <div className={cx('list-item')}>
                        <img src={avatar} alt="avatar" className={cx('search-avatar')} />
                        <div className={cx('search-info')}>
                            <p className={cx('info-title')}>Release that Man</p>
                            <p className={cx('info-category')}>Manhwa</p>
                            <span className={cx('info-summary')}>
                                The alien DNA is the best thing that has ever happened to Ye Shuang because the genetic
                                optimization it offers has made her more beautiful, more formidable, and more brilliant.
                            </span>
                        </div>
                    </div>
                    <div className={cx('list-item')}>
                        <img src={avatar} alt="avatar" className={cx('search-avatar')} />
                        <div className={cx('search-info')}>
                            <p className={cx('info-title')}>Release that Man</p>
                            <p className={cx('info-category')}>Manhwa</p>
                            <span className={cx('info-summary')}>
                                The alien DNA is the best thing that has ever happened to Ye Shuang because the genetic
                                optimization it offers has made her more beautiful, more formidable, and more brilliant.
                            </span>
                        </div>
                    </div>
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
