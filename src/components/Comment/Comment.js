import className from 'classnames/bind';
import styles from './Comment.module.scss';
import image from '~/assets/images/600.jpg';

const cx = className.bind(styles);

function Comment() {
    return (
        <div className={cx('wrapper')}>
            <img src={image} alt="" className={cx('avatar')} />
            <div className={cx('content')}>
                <p className={cx('name')}>Kim Tung Nguyen</p>
                <p className={cx('rate')}>Chưa đánh giá</p>
                <p className={cx('text')}>
                    Hay quá anh ơi. Kiến thức rất cô đọng, hiệu quả. 1 video 30 phút mà giải quyết được rất nhiều vấn đề
                    quả. 1 video 30 phút mà giải quyết được rất nhiều vấn đề
                </p>
                <p className={cx('time')}>2 ngày trước</p>
            </div>
        </div>
    );
}

export default Comment;
