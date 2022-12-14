import className from 'classnames/bind';
import styles from './ComicCard.module.scss';

import noImage from '~/assets/images/comic-image.svg';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function SmallCard1({ data }) {
    return (
        <div className={cx('wrapper-small-1')}>
            <Link to={`/comic/${data?.name}/${data?.id}`} className={cx('card-image')}>
                <img src={data?.image || noImage} alt="thumnail" />
            </Link>
            <Link to={`/comic/${data?.name}/${data?.id}`} className={cx('title')}>
                {data?.name}
            </Link>
            <Link to={`/category/${data?.category}`} className={cx('category')}>
                {data?.category}
            </Link>
        </div>
    );
}

export default SmallCard1;
