import className from 'classnames/bind';
import styles from './MySlider.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import image from '~/assets/images/slider.svg';
import image from '~/assets/images/big-banner.svg';
import image2 from '~/assets/images/big-banner2.svg';
import image3 from '~/assets/images/big-banner3.svg';

const cx = className.bind(styles);

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
};

function MySlider() {
    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                <div className={cx('slider')}>
                    <img src={image2} alt="mainimage" />
                </div>
                <div className={cx('slider')}>
                    <img src={image} alt="mainimage" />
                </div>
                <div className={cx('slider')}>
                    <img src={image3} alt="mainimage" />
                </div>
                <div className={cx('slider')}>
                    <img src={image2} alt="mainimage" />
                </div>
                <div className={cx('slider')}>
                    <img src={image} alt="mainimage" />
                </div>
                <div className={cx('slider')}>
                    <img src={image3} alt="mainimage" />
                </div>
            </Slider>
        </div>
    );
}

export default MySlider;
