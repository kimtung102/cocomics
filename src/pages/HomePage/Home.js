import className from 'classnames/bind';
import styles from './Home.module.scss';

import Header from '~/layouts/Header/Header';
import ComicCard from '~/components/ComicCard/SmallCard1';
import SmallCard2 from '~/components/ComicCard/SmallCard2';

const cx = className.bind(styles);

function Home() {
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <ComicCard />
                <ComicCard />
                <SmallCard2 />
            </div>
        </>
    );
}

export default Home;
