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
import { highlightWeekState, comicLatestState, comicRisingState } from '~/states/contentHome';

const cx = className.bind(styles);

const listSmallCard1 = [
    {
        image: sm1,
        name: 'S??? th??ng thi??n c???a m???t ng?????i kh??ng t??n',
        category: 'Fantasy',
    },
    {
        image: sm2,
        name: 'Ho??n th??nh thu???c t??nh v?? thu???t',
        category: 'Fantasy',
    },
    {
        image: sm3,
        name: 'Si??u sao ??a n??ng: Tr???i d???y ??? Hollywood',
        category: 'Eastern Fantasy',
    },
    {
        image: sm4,
        name: 'T??i L?? M???t Chuy??n Gia Nh?? Th???; T???i sao t??i ph???i nh???n m??n ?????',
        category: 'Sci-fi',
    },
    {
        image: sm5,
        name: 'Ch??a t??? lo??i ng?????i',
        category: 'Fantasy',
    },
    {
        image: sm6,
        name: 'S??? tr???i d???y c???a Harvest',
        category: 'Eastern Fantasy',
    },
    {
        image: sm7,
        name: 'Th???c t???nh trong 10 ng??y',
        category: 'Fantasy',
    },
    {
        image: sm8,
        name: 'T??i sinh v???i m???t h??? th???ng Badluck',
        category: 'Eastern Fantasy',
    },
    {
        image: sm9,
        name: 'T??i c?? m???t n??ng l???c ?????c bi???t',
        category: 'Fantasy',
    },
    {
        image: sm10,
        name: 'K??? nguy??n di truy???n v?? ?????i',
        category: 'Fantasy',
    },
];

const newComicList = [
    {
        image: sm3,
        name: 'Si??u sao ??a n??ng: Tr???i d???y ??? Hollywood',
        category: 'Eastern Fantasy',
    },
    {
        image: sm4,
        name: 'T??i L?? M???t Chuy??n Gia Nh?? Th???; T???i sao t??i ph???i nh???n m??n ?????',
        category: 'Sci-fi',
    },
    {
        image: sm5,
        name: 'Ch??a t??? lo??i ng?????i',
        category: 'Fantasy',
    },
    {
        image: sm6,
        name: 'S??? tr???i d???y c???a Harvest',
        category: 'Eastern Fantasy',
    },
    {
        image: sm7,
        name: 'Th???c t???nh trong 10 ng??y',
        category: 'Fantasy',
    },
    {
        image: sm8,
        name: 'T??i sinh v???i m???t h??? th???ng Badluck',
        category: 'Eastern Fantasy',
    },
    {
        image: sm9,
        name: 'T??i c?? m???t n??ng l???c ?????c bi???t',
        category: 'Fantasy',
    },
    {
        image: sm10,
        name: 'K??? nguy??n di truy???n v?? ?????i',
        category: 'Fantasy',
    },
];

const recommendList = [
    {
        image: rm3,
        name: 'Si??u sao ??a n??ng: Tr???i d???y ??? Hollywood',
        category: 'Eastern Fantasy',
    },
    {
        image: rm4,
        name: 'T??i L?? M???t Chuy??n Gia Nh?? Th???; T???i sao t??i ph???i nh???n m??n ?????',
        category: 'Sci-fi',
    },
    {
        image: rm5,
        name: 'Ch??a t??? lo??i ng?????i',
        category: 'Fantasy',
    },
    {
        image: rm6,
        name: 'S??? tr???i d???y c???a Harvest',
        category: 'Eastern Fantasy',
    },
    {
        image: rm1,
        name: 'Th???c t???nh trong 10 ng??y',
        category: 'Fantasy',
    },
    {
        image: rm2,
        name: 'T??i sinh v???i m???t h??? th???ng Badluck',
        category: 'Eastern Fantasy',
    },
];

function Home() {
    const isLogin = useRecoilValue(userAuth);
    const [rankDay, setRankDay] = useRecoilState(rankDayState);
    const [rankWeek, setRankWeek] = useRecoilState(rankWeekState);
    const [rankMonth, setRankMonth] = useRecoilState(rankMonthState);
    const [highlightWeek, setHighlightWeek] = useRecoilState(highlightWeekState);
    const [comicLatest, setComicLatest] = useRecoilState(comicLatestState);
    const [comicRising, setComicRising] = useRecoilState(comicRisingState);

    useEffect(() => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }, [isLogin]);

    useEffect(() => {
        const getHighlightWeek = async () => {
            try {
                const res = await get('/search-comic-by-cate', {
                    params: {
                        cateId: 3,
                        orderBy: 3,
                    },
                });

                const data = res.slice(0, 10);
                setHighlightWeek(data);
            } catch (error) {
                console.log(error);
            }
        };

        const getComicRising = async () => {
            try {
                const res = await get('/search-comic-by-cate', {
                    params: {
                        cateId: 12,
                        orderBy: 3,
                    },
                });
                const data = res.slice(0, 9);
                setComicRising(data);
                console.log('1', res);
                console.log('2', data);
            } catch (error) {
                console.log(error);
            }
        };

        const getComicLatest = async () => {
            try {
                const res = await get('/search-comic-by-cate', {
                    params: {
                        cateId: 22,
                        orderBy: 3,
                    },
                });
                const data = res.slice(0, 8);
                setComicLatest(data);
            } catch (error) {
                console.log(error);
            }
        };
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

        getHighlightWeek();
        getComicRising();
        getComicLatest();
        getRankDay();
        getRankWeek();
        getRankMonth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <MySlider />
            <div className={cx('body')}>
                <div className={cx('content')}>
                    <div className={cx('trending')}>
                        <p className={cx('title')}>N???i b???t trong tu???n {'>'}</p>
                        <div className={cx('trending-inner')}>
                            <Card />
                            <div className={cx('list-comic')}>
                                {highlightWeek.length > 0
                                    ? highlightWeek.map((data, index) => <SmallCard1 data={data} key={data.id} />)
                                    : listSmallCard1.map((data, index) => <SmallCard1 data={data} key={index} />)}
                            </div>
                        </div>
                    </div>
                    <div className={cx('banner')}>
                        <Banner bgImage={bgBanner} name="V???n C??? T???i C?????ng T??ng" />
                        <Banner bgImage={bgBanner2} name="K??? Nguy??n K?? L???" />
                    </div>
                    <div className={cx('ranking')}>
                        <p className={cx('title')}>X???p h???ng</p>
                        <div className={cx('ranking-inner')}>
                            <div className={cx('row')}>
                                <h4 className={cx('rank-title')}>Top ng??y</h4>
                                <div className={cx('rank-list')}>
                                    {rankDay.map((item, index) => (
                                        <RankCard key={item.id} data={item} rank={index + 1} />
                                    ))}
                                </div>
                            </div>
                            <div className={cx('row')}>
                                <h4 className={cx('rank-title')}>Top tu???n</h4>
                                <div className={cx('rank-list')}>
                                    {rankWeek.map((item, index) => (
                                        <RankCard key={item.id} data={item} rank={index + 1} />
                                    ))}
                                </div>
                            </div>
                            <div className={cx('row')}>
                                <h4 className={cx('rank-title')}>Top th??ng</h4>
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
                            <p className={cx('title-no-border')}>Truy???n h?? c???u ??ang l??n</p>
                            <LargeCard2 data={comicRising} />
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
                        <p className={cx('title')}>Truy???n m???i c???p nh???t</p>
                        <div className={cx('new-inner')}>
                            {comicLatest.length > 0
                                ? comicLatest.map((data, index) => <SmallCard1 data={data} key={index} />)
                                : newComicList.map((data, index) => <SmallCard1 data={data} key={index} />)}
                        </div>
                    </div>
                    <div className={cx('keyword')}>
                        <p className={cx('title')}>T??? kh??a n???i b???t #</p>
                        <div className={cx('keyword-inner')}>
                            <Button keyword>#ACTION</Button>
                            <Button keyword>#ROMANCE</Button>
                            <Button keyword>#MYSTERY</Button>
                            <Button keyword>#MANHWA</Button>
                            <Button keyword>#FANTASY</Button>
                            <Button keyword>#TRINH TH??M</Button>
                            <Button keyword>#ROMANCE</Button>
                            <Button keyword>#MYSTERY</Button>
                            <Button keyword>#FANTASY</Button>
                            <Button keyword>#MANHWA</Button>
                            <Button keyword>#TRINH TH??M</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
