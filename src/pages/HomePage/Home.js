import className from 'classnames/bind';
import styles from './Home.module.scss';

import Header from '~/layouts/Header/Header';
import SmallCard2 from '~/components/ComicCard/SmallCard2';
import Card from '~/components/ComicCard/Card';
import Footer from '~/layouts/Footer/Footer';
import MySlider from '~/components/Slider/MySlider';
import SmallCard1 from '~/components/ComicCard/SmallCard1';
import Button from '~/components/Button/Button';
import LargeCard2 from '~/components/ComicCard/LargeCard2';
import Banner from '~/components/ComicCard/Banner';
import { useEffect, useState } from 'react';
import { get } from '~/utils/httpRequest';
import RankCard from '~/components/ComicCard/RankCard';

const cx = className.bind(styles);

function Home() {
    const [rankDay, setRankDay] = useState([]);
    const [rankWeek, setRankWeek] = useState([]);
    const [rankMonth, setRankMonth] = useState([]);

    useEffect(() => {
        const getRankDay = async () => {
            try {
                const res = await get('/comic-rank-view-no', {
                    params: {
                        orderType: 1,
                        top: 5,
                    },
                });
                setRankDay(res);
            } catch (error) {
                console.log(error);
            }
        };
        getRankDay();
    }, []);

    useEffect(() => {
        const getRankWeek = async () => {
            try {
                const res = await get('/comic-rank-view-no', {
                    params: {
                        orderType: 2,
                        top: 5,
                    },
                });
                setRankWeek(res);
            } catch (error) {
                console.log(error);
            }
        };
        getRankWeek();
    }, []);

    useEffect(() => {
        const getRankMonth = async () => {
            try {
                const res = await get('/comic-rank-view-no', {
                    params: {
                        orderType: 3,
                        top: 5,
                    },
                });
                setRankMonth(res);
            } catch (error) {
                console.log(error);
            }
        };
        getRankMonth();
    }, []);

    return (
        <>
            <Header />
            <MySlider />
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <div className={cx('trending')}>
                        <p className={cx('title')}>Nổi bật trong tuần {'>'}</p>
                        <div className={cx('trending-inner')}>
                            <Card />
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
                    <div className={cx('banner')}>
                        <Banner />
                        <Banner />
                    </div>
                    <div className={cx('ranking')}>
                        <p className={cx('title')}>Xếp hạng</p>
                        <div className={cx('ranking-inner')}>
                            <div className={cx('row')}>
                                <h4 className={cx('rank-title')}>Top ngày</h4>
                                <div className={cx('rank-list')}>
                                    {rankDay.map((item, index) => (
                                        <RankCard key={item.id} data={item} rank={index + 1} />
                                    ))}
                                </div>
                            </div>
                            <div className={cx('row')}>
                                <h4 className={cx('rank-title')}>Top tuần</h4>
                                <div className={cx('rank-list')}>
                                    {rankWeek.map((item, index) => (
                                        <RankCard key={item.id} data={item} rank={index + 1} />
                                    ))}
                                </div>
                            </div>
                            <div className={cx('row')}>
                                <h4 className={cx('rank-title')}>Top tháng</h4>
                                <div className={cx('rank-list')}>
                                    {rankMonth.map((item, index) => (
                                        <RankCard key={item.id} data={item} rank={index + 1} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('funny-wrapper')}>
                        <div className={cx('left')}>
                            <p className={cx('title-no-border')}>Truyện hư cấu đang lên</p>
                            <LargeCard2 />
                        </div>
                        <div className={cx('right')}>
                            <p className={cx('title')}>Recommend</p>
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
