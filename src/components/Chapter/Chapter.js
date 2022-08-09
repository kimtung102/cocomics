import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Chapter.module.scss';

const cx = className.bind(styles);

function Chapter({ data, stt }) {
    return (
        <Link to={`/comic/${data?.name}/${data?.bookId}/chapter-${data?.chapter}`} className={cx('wrapper')}>
            <span className={cx('number')}>{data?.stt ? data.stt : ' '}</span>
            <div className={cx('content')}>
                <p className={cx('title')}>{`Chap ${stt}`}</p>
                <p className={cx('time')}> 2 tháng trước</p>
            </div>
        </Link>
    );
}

export default Chapter;
