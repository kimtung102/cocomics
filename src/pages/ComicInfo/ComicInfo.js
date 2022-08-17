import className from 'classnames/bind';
import styles from './ComicInfo.module.scss';
import image from '~/assets/images/600.svg';
import iconBxh from '~/assets/images/bxh-icon-red.svg';
import star from '~/assets/images/star-icon-active.svg';
import nostar from '~/assets/images/star-icon-disable.svg';
import heartSolid from '~/assets/images/heart-regular.svg';
import Button from '~/components/Button/Button';
import Comment from '~/components/Comment/Comment';
import Header from '~/layouts/Header/Header';
import Footer from '~/layouts/Footer/Footer';
import { useEffect, useState } from 'react';
import Chapter from '~/components/Chapter/Chapter';
import PageBar from '~/components/Pagination/PageBar';
import { get } from '~/utils/httpRequest';
import { useParams } from 'react-router-dom';

const cx = className.bind(styles);

function ComicInfo() {
    const [index, setIndex] = useState(1);
    const [listChapter, setListChapter] = useState([]);
    const [firstChap, setFirstChap] = useState();
    const [stt, setStt] = useState(1);
    const [book, setBook] = useState({});
    const [pagination, setPagination] = useState({
        current: 1,
        size: 4,
        totalRow: 42,
    });
    const [newPage, setNewPage] = useState(1);

    const { bookId } = useParams();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const getBook = async () => {
            const res = await get('/comic-info', {
                params: {
                    bookId: bookId,
                },
            });
            setBook(res);
            console.log(res);
        };
        getBook();
    }, []);

    useEffect(() => {
        const getData = async () => {
            const res = await get('/comic-chapter-list', {
                params: {
                    bookId: bookId,
                    size: 4,
                    page: newPage,
                },
            });
            const data = JSON.parse(res);
            setPagination({
                current: newPage,
                size: 4,
                totalRow: data.total,
            });
            setListChapter(data.chapters);
        };
        getData();
    }, [newPage]);

    const handlePageChange = (page) => {
        setNewPage((prev) => {
            if (page > prev) {
                setStt(stt + 4 * (page - prev));
            } else if (page < prev) {
                setStt(stt - 4 * (prev - page));
            }
            return page;
        });
    };
    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('banner-overlay')}>
                    <div className={cx('banner-linear')}></div>
                    <div className={cx('banner')}>
                        <img src={book.image} alt="" className={cx('banner-image')} />
                        <div className={cx('banner-content')}>
                            <h2>{book.name || 'Chiến thần cuồng phi'}</h2>
                            <p className={cx('author')}>Tác giả: Lục xu</p>
                            <p className={cx('list-category')}>
                                <a href="/" className={cx('category')}>
                                    {`${book.category}`}
                                </a>
                            </p>
                            <span className={cx('summary')}>{book.description}</span>
                            <div className={cx('btn')}>
                                <Button primary small to={`/comic/${book.name}/${book.id}/chap1/${listChapter[0]?.id}`}>
                                    ĐỌC NGAY
                                </Button>
                                <img src={heartSolid} alt="" className={cx('heart')} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('content-wrapper')}>
                    <div className={cx('indicator-wrapper')}>
                        <span className={cx(index === 1 ? 'active' : '')} onClick={() => setIndex(1)}>
                            Giới thiệu
                        </span>
                        <span className={cx('indicator', index === 2 && 'active')} onClick={() => setIndex(2)}>
                            Mục lục
                        </span>
                    </div>
                    {index === 1 ? (
                        <>
                            <div className={cx('summary-wrapper')}>
                                <h3 className={cx('title')}>Nội dung</h3>
                                <p className={cx('text')}>{book.description}</p>
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
                                        <p className={cx('rank-text')}>{`NO.${book.viewNo}`}</p>
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
                                    <Comment />
                                    <Comment />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className={cx('chapter')}>Chapter</p>
                            <div className={cx('list-chapter')}>
                                {listChapter.map((chapter, index) => {
                                    return <Chapter stt={stt + index} key={chapter.id} />;
                                })}
                            </div>
                            <PageBar onPageChange={handlePageChange} pagination={pagination} />
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ComicInfo;
