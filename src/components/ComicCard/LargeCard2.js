import className from 'classnames/bind';
import styles from './LargeCard2.module.scss';

import Button from '~/components/Button/Button';
import image1 from '~/assets/images/large-card-2/1.jpg';
import image2 from '~/assets/images/large-card-2/2.jpg';
import image3 from '~/assets/images/large-card-2/3.jpg';
import image4 from '~/assets/images/large-card-2/4.jpg';
import image5 from '~/assets/images/large-card-2/5.jpg';
import image6 from '~/assets/images/large-card-2/6.jpg';
import image7 from '~/assets/images/large-card-2/7.jpg';
import image8 from '~/assets/images/large-card-2/8.jpg';
import image9 from '~/assets/images/large-card-2/9.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

const comicDefault = [
    {
        id: 1,
        name: 'Đại học siêu nhiên',
        category: 'Phiêu lưu',
        image: image1,
    },
    {
        id: 2,
        name: 'Thuyết tiến hóa',
        category: 'Viễn tưởng',
        image: image2,
    },
    {
        id: 3,
        name: 'Chiến binh cuối cùng',
        category: 'Hành động',
        image: image3,
    },
    {
        id: 4,
        name: 'Siêu hệ thống khải huyền',
        category: 'Kinh dị',
        image: image4,
    },
    {
        id: 5,
        name: 'Chiến binh vô song',
        category: 'Hành động',
        image: image5,
    },
    {
        id: 6,
        name: 'Con đường tự do',
        category: 'Phiêu lưu',
        image: image6,
    },
    {
        id: 7,
        name: 'Tái sinh Predator',
        category: 'Viễn tưởng',
        image: image7,
    },
    {
        id: 8,
        name: 'Tổng tài tại thượng',
        category: 'Ngôn tình',
        image: image8,
    },
    {
        id: 9,
        name: 'Sự trỗi dậy của Lucy',
        category: 'Kịch tính',
        image: image9,
    },
];

function LargeCard2({ data }) {
    const [vIndex, setVIndex] = useState(1);

    return (
        <div className={cx('wrapper-large-2')}>
            <div className={cx('list-image')}>
                {data.length > 0
                    ? data.map((item, index) => (
                          <span className={cx('image-item', vIndex === index + 1 ? 'active' : 'noActive')}>
                              <img src={item.image} alt="#" onClick={() => setVIndex(index + 1)} />
                          </span>
                      ))
                    : comicDefault.map((item, index) => (
                          <span className={cx('image-item', vIndex === index + 1 ? 'active' : 'noActive')}>
                              <img src={item.image} alt="#" onClick={() => setVIndex(index + 1)} />
                          </span>
                      ))}
            </div>
            {data.length > 0 ? (
                <div className={cx('content-wrapper')}>
                    <Link to={`/comic/${data[vIndex - 1]?.name}/${data[vIndex - 1]?.id}`} className={cx('main-image')}>
                        <img src={data[vIndex - 1]?.image} alt="#" />
                    </Link>
                    <div className={cx('card-body')}>
                        <Link
                            to={`/comic/${data[vIndex - 1]?.name}/${data[vIndex - 1]?.id}`}
                            className={cx('content-title')}
                        >
                            {data[vIndex - 1]?.name}
                        </Link>
                        <Link to={`/category/${data[vIndex - 1]?.category}`} className={cx('content-category')}>
                            {data[vIndex - 1]?.category || 'Fantasy'}
                        </Link>
                        <span className={cx('content-summary')}>
                            Tae Gyum sau khi phát hiện mình là một Alpha trội gặp tai họa khi vô tình khiến một Omega
                            phát tình, cậu trở nên né tránh là một Alpha trội gặp tai họa khi vô tình khiến một Omega
                            phát tình, cậu trở nên né tránh
                        </span>
                        <span>
                            <Button primary small to={`/comic/${data[vIndex - 1]?.name}/${data[vIndex - 1]?.id}`}>
                                Đọc ngay
                            </Button>
                        </span>
                    </div>
                </div>
            ) : (
                <div className={cx('content-wrapper')}>
                    <Link
                        to={`/comic/${comicDefault[vIndex - 1].name}/${comicDefault[vIndex - 1].id}`}
                        className={cx('main-image')}
                    >
                        <img src={comicDefault[vIndex - 1].image} alt="#" />
                    </Link>
                    <div className={cx('card-body')}>
                        <Link
                            to={`/comic/${comicDefault[vIndex - 1].name}/${comicDefault[vIndex - 1].id}`}
                            className={cx('content-title')}
                        >
                            {comicDefault[vIndex - 1].name}
                        </Link>
                        <Link to={`/category/${comicDefault[vIndex - 1].category}`} className={cx('content-category')}>
                            {comicDefault[vIndex - 1].category || 'Fantasy'}
                        </Link>
                        <span className={cx('content-summary')}>
                            Tae Gyum sau khi phát hiện mình là một Alpha trội gặp tai họa khi vô tình khiến một Omega
                            phát tình, cậu trở nên né tránh là một Alpha trội gặp tai họa khi vô tình khiến một Omega
                            phát tình, cậu trở nên né tránh
                        </span>
                        <span>
                            <Button
                                primary
                                small
                                to={`/comic/${comicDefault[vIndex - 1].name}/${comicDefault[vIndex - 1].id}`}
                            >
                                Đọc ngay
                            </Button>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LargeCard2;
