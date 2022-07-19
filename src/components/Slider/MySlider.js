import className from 'classnames/bind';
import styles from './MySlider.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image from '~/assets/images/slider.svg';

const cx = className.bind(styles);

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function MySlider() {
    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                <div className={cx('slider')}>
                    <span className={cx('slider-content')}></span>
                    <img src={image} alt="mainimage" />
                </div>
                <div className={cx('slider')}>
                    <span className={cx('slider-content')}></span>
                    <img src={image} alt="mainimage" />
                </div>
                <div className={cx('slider')}>
                    <span className={cx('slider-content')}></span>
                    <img src={image} alt="mainimage" />
                </div>
            </Slider>
        </div>
    );
}

export default MySlider;
