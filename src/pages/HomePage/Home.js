import className from 'classnames/bind';
import styles from './Home.module.scss';

import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import MySlider from '~/components/Slider/MySlider';

const cx = className.bind(styles);

function Home() {
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <h1>alo</h1>
            </div>
        </>
    );
}

export default Home;
