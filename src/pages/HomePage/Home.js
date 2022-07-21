import className from 'classnames/bind';
import styles from './Home.module.scss';

import Header from '~/layouts/Header/Header';
import ComicCard from '~/components/ComicCard/SmallCard1';
import SmallCard2 from '~/components/ComicCard/SmallCard2';
import LargeCard1 from '~/components/ComicCard/LargeCard1';
import Test from '~/components/Slider/Test';

const cx = className.bind(styles);

function Home() {
    return (
        <>
            <Header />
            <div className={cx('wrapper')}></div>
        </>
    );
}

export default Home;
