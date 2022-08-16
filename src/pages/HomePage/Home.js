import className from 'classnames/bind';
import styles from './Home.module.scss';

import Header from '~/layouts/Header/Header';
import SmallCard2 from '~/components/ComicCard/SmallCard2';
import Card from '~/components/ComicCard/Card';
import Footer from '~/layouts/Footer/Footer';
import MySlider from '~/components/Slider/MySlider';
import SmallCard1 from '~/components/ComicCard/SmallCard1';
import Button from '~/components/Button/Button';
import sm1 from '~/assets/images/small-card-1/1.jpg';
import sm2 from '~/assets/images/small-card-1/2.jpg';
import sm3 from '~/assets/images/small-card-1/3.jpg';
import sm4 from '~/assets/images/small-card-1/4.jpg';
import sm5 from '~/assets/images/small-card-1/5.jpg';
import sm6 from '~/assets/images/small-card-1/6.jpg';
import sm7 from '~/assets/images/small-card-1/7.jpg';
import sm8 from '~/assets/images/small-card-1/8.jpg';
import sm9 from '~/assets/images/small-card-1/9.jpg';
import sm10 from '~/assets/images/small-card-1/10.jpg';
import rm1 from '~/assets/images/small-card-2/1.jpg';
import rm2 from '~/assets/images/small-card-2/2.jpg';
import rm3 from '~/assets/images/small-card-2/3.jpg';
import rm4 from '~/assets/images/small-card-2/4.jpg';
import rm5 from '~/assets/images/small-card-2/5.jpg';
import rm6 from '~/assets/images/small-card-2/6.jpg';
import bgBanner from '~/assets/images/bg-banner.svg';
import bgBanner2 from '~/assets/images/banner-comic-2.svg';
import LargeCard2 from '~/components/ComicCard/LargeCard2';
import Banner from '~/components/ComicCard/Banner';
import { useEffect } from 'react';
import { get } from '~/utils/httpRequest';
import RankCard from '~/components/ComicCard/RankCard';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAuth } from '~/states/userState';
import { rankDayState, rankMonthState, rankWeekState } from '~/states/rankState';

const cx = className.bind(styles);

const listSmallCard1 = [
    {
        image: sm1,
        name: 'Sự thăng thiên của một người không tên',
        category: 'Fantasy',
    },
    {
        image: sm2,
        name: 'Hoàn thành thuộc tính võ thuật',
        category: 'Fantasy',
    },
    {
        image: sm3,
        name: 'Siêu sao đa năng: Trỗi dậy ở Hollywood',
        category: 'Eastern Fantasy',
    },
    {
        image: sm4,
        name: 'Tôi Là Một Chuyên Gia Như Thế; Tại sao tôi phải nhận môn đệ',
        category: 'Sci-fi',
    },
    {
        image: sm5,
        name: 'Chúa tể loài người',
        category: 'Fantasy',
    },
    {
        image: sm6,
        name: 'Sự trỗi dậy của Harvest',
        category: 'Eastern Fantasy',
    },
    {
        image: sm7,
        name: 'Thức tỉnh trong 10 ngày',
        category: 'Fantasy',
    },
    {
        image: sm8,
        name: 'Tái sinh với một hệ thống Badluck',
        category: 'Eastern Fantasy',
    },
    {
        image: sm9,
        name: 'Tôi có một năng lực đặc biệt',
        category: 'Fantasy',
    },
    {
        image: sm10,
        name: 'Kỷ nguyên di truyền vĩ đại',
        category: 'Fantasy',
    },
];

const newComicList = [
    {
        image: sm3,
        name: 'Siêu sao đa năng: Trỗi dậy ở Hollywood',
        category: 'Eastern Fantasy',
    },
    {
        image: sm4,
        name: 'Tôi Là Một Chuyên Gia Như Thế; Tại sao tôi phải nhận môn đệ',
        category: 'Sci-fi',
    },
    {
        image: sm5,
        name: 'Chúa tể loài người',
        category: 'Fantasy',
    },
    {
        image: sm6,
        name: 'Sự trỗi dậy của Harvest',
        category: 'Eastern Fantasy',
    },
    {
        image: sm7,
        name: 'Thức tỉnh trong 10 ngày',
        category: 'Fantasy',
    },
    {
        image: sm8,
        name: 'Tái sinh với một hệ thống Badluck',
        category: 'Eastern Fantasy',
    },
    {
        image: sm9,
        name: 'Tôi có một năng lực đặc biệt',
        category: 'Fantasy',
    },
    {
        image: sm10,
        name: 'Kỷ nguyên di truyền vĩ đại',
        category: 'Fantasy',
    },
];

const recommendList = [
    {
        image: rm3,
        name: 'Siêu sao đa năng: Trỗi dậy ở Hollywood',
        category: 'Eastern Fantasy',
    },
    {
        image: rm4,
        name: 'Tôi Là Một Chuyên Gia Như Thế; Tại sao tôi phải nhận môn đệ',
        category: 'Sci-fi',
    },
    {
        image: rm5,
        name: 'Chúa tể loài người',
        category: 'Fantasy',
    },
    {
        image: rm6,
        name: 'Sự trỗi dậy của Harvest',
        category: 'Eastern Fantasy',
    },
    {
        image: rm1,
        name: 'Thức tỉnh trong 10 ngày',
        category: 'Fantasy',
    },
    {
        image: rm2,
        name: 'Tái sinh với một hệ thống Badluck',
        category: 'Eastern Fantasy',
    },
];

function Home() {
    const isLogin = useRecoilValue(userAuth);
    const [rankDay, setRankDay] = useRecoilState(rankDayState);
    const [rankWeek, setRankWeek] = useRecoilState(rankWeekState);
    const [rankMonth, setRankMonth] = useRecoilState(rankMonthState);

    useEffect(() => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }, [isLogin]);

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
                console.log(res);
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
                                {listSmallCard1.map((data, index) => (
                                    <SmallCard1 data={data} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={cx('banner')}>
                        <Banner bgImage={bgBanner} name="Vạn Cổ Tối Cường Tông" />
                        <Banner bgImage={bgBanner2} name="Kỷ Nguyên Kì Lạ" />
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
                                {recommendList.map((data, index) => (
                                    <SmallCard2 data={data} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={cx('new-comic')}>
                        <p className={cx('title')}>Truyện mới cập nhật</p>
                        <div className={cx('new-inner')}>
                            {newComicList.map((data, index) => (
                                <SmallCard1 data={data} key={index} />
                            ))}
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
