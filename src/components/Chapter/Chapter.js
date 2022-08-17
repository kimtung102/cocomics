import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Chapter.module.scss';
import { useSetRecoilState } from 'recoil';
import { selectedValueState } from '~/states/readingPageState';

const cx = className.bind(styles);

function Chapter({ data, stt, chapId }) {
    const setSelectedValue = useSetRecoilState(selectedValueState);
    return (
        <Link
            to={`/comic/${data?.bookName}/${data?.bookId}/chap${stt}/${chapId}`}
            className={cx('wrapper')}
            onClick={() => setSelectedValue(stt)}
        >
            <span className={cx('number')}>{data?.stt ? data.stt : ' '}</span>
            <div className={cx('content')}>
                <p className={cx('title')}>{`Chap ${stt}`}</p>
                <p className={cx('time')}> 2 tháng trước</p>
            </div>
        </Link>
    );
}

export default Chapter;
