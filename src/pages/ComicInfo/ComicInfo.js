import className from 'classnames/bind';
import styles from './ComicInfo.module.scss';
import image from '~/assets/images/600.jpg';
import iconBxh from '~/assets/images/bxh-icon-red.svg';
import star from '~/assets/images/star-icon-active.svg';
import nostar from '~/assets/images/star-icon-disable.svg';
import heartSolid from '~/assets/images/heart-regular.svg';
import Button from '~/components/Button/Button';
import Comment from '~/components/Comment/Comment';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';

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
                    <div className={cx('summary-wrapper')}>
                        <h3 className={cx('title')}>Nội dung</h3>
                        <p className={cx('text')}>
                            Dũng sĩ Devota lớn lên từ bàn tay của giáo hoàng Maggiore, cuộc đời động một chút là bị phạt
                            mà không một lần được nói chuyện thoải mái, thậm chí còn bị sát hại một cách tàn nhẫn sau
                            khi tiêu diệt được ma vương.
                            <br /> Vậy vị thần đã dành tặng món quà tái sinh cho Devota để kiếp này Devota được sống
                            hạnh phúc thậm chí còn bị sát hại một cách tàn nhẫn sau khi tiêu diệt được ma vương. Vậy vị
                            thần đã dành tặng món quà tái sinh cho. <br />
                            Nhưng mà chuyện gì đây món quà tái sinh cho Devota để kiếp này Devota được sống hạnh phúc.
                            Thậm chí còn bị sát hại một cách tàn nhẫn sau khi tiêu diệt được ma vương.
                        </p>
                    </div>
                    <div className={cx('summary-wrapper')}>
                        <h3 className={cx('title')}>Tags</h3>
                        <Button keyword>#Fantasy</Button>
                        <Button keyword>#Cổ đại</Button>
                        <Button keyword>#Ngôn tình</Button>
                        <Button keyword>#Drama</Button>
                    </div>
                    <div className={cx('summary-wrapper')}>
                        <h3 className={cx('title')}>Xếp hạng</h3>
                        <div className={cx('rank')}>
                            <div className={cx('rank-no')}>
                                <img src={iconBxh} alt="" className={cx('rank-icon')} />
                                <p className={cx('rank-text')}>NO.121</p>
                            </div>
                            <Button primary>Đánh giá</Button>
                        </div>
                        <div className={cx('feedback')}>
                            <p className={cx('total')}>357 Nhận xét</p>
                            <div className={cx('star-group')}>
                                <img src={star} alt="" className={cx('star')} />
                                <img src={star} alt="" className={cx('star')} />
                                <img src={star} alt="" className={cx('star')} />
                                <img src={star} alt="" className={cx('star')} />
                                <img src={nostar} alt="" className={cx('star')} />
                            </div>
                            <p className={cx('mark')}>4.71</p>
                        </div>
                    </div>
                    <div className={cx('comment-wrapper')}>
                        <h3 className={cx('title')}>Bình luận</h3>
                        <div className={cx('comment-input')}>
                            <img src={image} alt="" className={cx('avatar')} />
                            <input className={cx('input')} id="comment" placeholder="Add a comment..." />
                        </div>
                        <div className={cx('list-comment')}>
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ComicInfo;
