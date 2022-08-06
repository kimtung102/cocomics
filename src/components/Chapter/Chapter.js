import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Chapter.module.scss';

const cx = className.bind(styles);

function Chapter({ data }) {
    return (
        <Link to={`/comic/${data?.name}/${data?.bookId}/chapter-${data?.chapter}`} className={cx('wrapper')}>
            <span className={cx('number')}>{data?.stt ? data.stt : '1'}</span>
            <div className={cx('content')}>
                <p className={cx('title')}>Linh hồn bất diệt</p>
                <p className={cx('time')}> 2 tháng trước</p>
            </div>
        </Link>
    );
}

export default Chapter;
