import className from 'classnames/bind';
import styles from './Chapter.module.scss';

const cx = className.bind(styles);

function Chapter({ odd = false, stt }) {
    return (
        <div className={cx('wrapper', odd && 'odd')}>
            <span className={cx('number')}>{stt}</span>
            <div className={cx('content')}>
                <p className={cx('title')}>Linh hồn bất diệt</p>
                <p className={cx('time')}> 2 tháng trước</p>
            </div>
        </div>
    );
}

export default Chapter;
