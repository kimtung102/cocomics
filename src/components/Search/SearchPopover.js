import className from 'classnames/bind';
import styles from './Search.module.scss';
import avatar from '~/assets/images/comic-image.svg';

const cx = className.bind(styles);

function SearchPopover() {
    return (
        <div className={cx('list-item')}>
            <img src={avatar} alt="avatar" className={cx('search-avatar')} />
            <div className={cx('search-info')}>
                <p className={cx('info-title')}>Release that Man</p>
                <p className={cx('info-category')}>Manhwa</p>
                <span className={cx('info-summary')}>
                    The alien DNA is the best thing that has ever happened to Ye Shuang because the genetic optimization
                    it offers has made her more beautiful, more formidable, and more brilliant.
                </span>
            </div>
        </div>
    );
}

export default SearchPopover;
