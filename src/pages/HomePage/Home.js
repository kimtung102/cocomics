import className from 'classnames/bind';
import styles from './Home.module.scss';

import Header from '~/layouts/Header/Header';
import SmallCard2 from '~/components/ComicCard/SmallCard2';
import LargeCard1 from '~/components/ComicCard/LargeCard1';
import Footer from '~/layouts/Footer/Footer';
import MySlider from '~/components/Slider/MySlider';
import SmallCard1 from '~/components/ComicCard/SmallCard1';
import Button from '~/components/Button/Button';
import imageSmall from '~/assets/images/hucau-small.svg';
import imagelarge from '~/assets/images/hucau-large.svg';

const cx = className.bind(styles);

function Home() {
    return (
        <>
            <Header />
            <MySlider />
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <div className={cx('trending')}>
                        <p className={cx('title')}>Nổi bật trong tuần {'>'}</p>
                        <div className={cx('trending-inner')}>
                            <LargeCard1 />
                            <div className={cx('list-comic')}>
                                <SmallCard1 />
                                <SmallCard1 />
                                <SmallCard1 />
                                <SmallCard1 />
                                <SmallCard1 />
                                <SmallCard1 />
                                <SmallCard1 />
                                <SmallCard1 />
                                <SmallCard1 />
                                <SmallCard1 />
                            </div>
                        </div>
                    </div>
                    <div className={cx('ranking')}>
                        <p className={cx('title')}>Xếp hạng</p>
                        <div className={cx('ranking-inner')}></div>
                    </div>
                    <div className={cx('funny-wrapper')}>
                        <div className={cx('left')}>
                            <p className={cx('title-no-border')}>Truyện hư cấu đang lên</p>
                            <div className={cx('left-wrapper')}>
                                <div className={cx('list-image')}>
                                    <img
                                        src={imageSmall}
                                        alt="#"
                                        width={'60px'}
                                        style={{
                                            border: '3px solid var(--primary)',
                                            'border-radius': '6px',
                                        }}
                                    />
                                    <img src={imageSmall} alt="#" width={'60px'} />
                                    <img src={imageSmall} alt="#" width={'60px'} />
                                    <img src={imageSmall} alt="#" width={'60px'} />
                                    <img src={imageSmall} alt="#" width={'60px'} />
                                    <img src={imageSmall} alt="#" width={'60px'} />
                                    <img src={imageSmall} alt="#" width={'60px'} />
                                    <img src={imageSmall} alt="#" width={'60px'} />
                                </div>
                                <div className={cx('content-wrapper')}>
                                    <span className={cx('main-image')}>
                                        <img src={imagelarge} alt="#" width={'124px'} />
                                    </span>
                                    <div className={cx('card-body')}>
                                        <a href="/" className={cx('content-title')}>
                                            Kinh nghiệm cảnh nóng
                                        </a>
                                        <a href="/" className={cx('content-category')}>
                                            Boy Love
                                        </a>
                                        <span className={cx('content-summary')}>
                                            Tae Gyum sau khi phát hiện mình là một Alpha trội gặp tai họa khi vô tình
                                            khiến một Omega phát tình, cậu trở nên né tránh là một Alpha trội gặp tai
                                            họa khi vô tình khiến một Omega phát tình, cậu trở nên né tránh
                                        </span>
                                        <Button primary small>
                                            Đọc ngay
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('right')}>
                            <p className={cx('title')}>Truyện vui</p>
                            <div className={cx('right-inner')}>
                                <SmallCard2 />
                                <SmallCard2 />
                                <SmallCard2 />
                                <SmallCard2 />
                                <SmallCard2 />
                                <SmallCard2 />
                            </div>
                        </div>
                    </div>
                    <div className={cx('new-comic')}>
                        <p className={cx('title')}>Truyện mới cập nhật</p>
                        <div className={cx('new-inner')}>
                            <SmallCard1 />
                            <SmallCard1 />
                            <SmallCard1 />
                            <SmallCard1 />
                            <SmallCard1 />
                            <SmallCard1 />
                            <SmallCard1 />
                            <SmallCard1 />
                        </div>
                    </div>
                    <div className={cx('keyword')}>
                        <p className={cx('title')}>Từ khóa nổi bật #</p>
                        <div className={cx('keyword-inner')}>
                            <Button keyword>#ACTION</Button>
                            <Button keyword>#ROMANCE</Button>
                            <Button keyword>#MYSTERY</Button>
                            <Button keyword>#MANHWA</Button>
                            <Button keyword>#FANTASY</Button>
                            <Button keyword>#TRINH THÁM</Button>
                            <Button keyword>#ROMANCE</Button>
                            <Button keyword>#MYSTERY</Button>
                            <Button keyword>#FANTASY</Button>
                            <Button keyword>#MANHWA</Button>
                            <Button keyword>#TRINH THÁM</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
