import className from 'classnames/bind';
import styles from './ComicInfo.module.scss';
import image from '~/assets/images/600.jpg';
import heartSolid from '~/assets/images/heart-regular.svg';
import Button from '~/components/Button/Button';
import Header from '~/layouts/Header/Header';

const cx = className.bind(styles);

function ComicInfo() {
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('banner-overlay')}>
                    <div className={cx('banner-linear')}></div>
                    <div className={cx('banner')}>
                        <img src={image} alt="" className={cx('banner-image')} />
                        <div className={cx('banner-content')}>
                            <h2>Chiến thần cuồng phi</h2>
                            <p className={cx('author')}>Tác giả: Lục xu</p>
                            <p className={cx('list-category')}>
                                <a href="/" className={cx('category')}>
                                    #CỔ ĐẠI
                                </a>
                                <a href="/" className={cx('category')}>
                                    #DRAMA
                                </a>
                                <a href="/" className={cx('category')}>
                                    #NGÔN TÌNH
                                </a>
                            </p>
                            <span className={cx('summary')}>
                                Dũng sĩ Devota lớn lên từ bàn tay của giáo hoàng Maggiore, cuộc đời động một chút là bị
                                phạt mà không một lần được nói chuyện thoải mái, thậm chí còn bị sát hại một cách tàn
                                nhẫn sau khi tiêu diệt được ma vương. Vậy vị thần đã dành tặng món quà tái sinh cho
                                Devota để kiếp này Devota được sống hạnh phúc. Nhưng mà chuyện gì đây món quà tái sinh
                                cho Devota để kiếp này Devota được sống hạnh phúc. Nhưng mà chuyện gì đây
                            </span>
                            <div className={cx('btn')}>
                                <Button primary small>
                                    ĐỌC NGAY
                                </Button>
                                <img src={heartSolid} alt="" className={cx('heart')} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('content-wrapper')}>
                    <div className={cx('indicator-wrapper')}>
                        <span className={cx('active')}>Giới thiệu</span>
                        <span className={cx('indicator')}>Mục lục</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ComicInfo;
