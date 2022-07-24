import className from 'classnames/bind';
import styles from './Home.module.scss';

import Header from '~/layouts/Header/Header';
import ComicCard from '~/components/ComicCard/SmallCard1';
import SmallCard2 from '~/components/ComicCard/SmallCard2';
import LargeCard1 from '~/components/ComicCard/LargeCard1';
import Footer from '~/layouts/Footer/Footer';
import MySlider from '~/components/Slider/MySlider';
import SmallCard1 from '~/components/ComicCard/SmallCard1';

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
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
