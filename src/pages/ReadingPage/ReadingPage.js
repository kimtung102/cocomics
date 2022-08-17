import className from 'classnames/bind';
import Footer from '~/layouts/Footer/Footer';
import styles from './ReadingPage.module.scss';
import back from '~/assets/images/goback.svg';
import ahead from '~/assets/images/goahead.svg';
import eye from '~/assets/images/eye.svg';
import logo from '~/assets/images/logo.svg';
import { get } from '~/utils/httpRequest';
import { useEffect, useState } from 'react';
import Button from '~/components/Button/Button';
import { Link, useParams } from 'react-router-dom';
import Header from '~/layouts/Header/Header';

const cx = className.bind(styles);

function ReadingPage() {
    const { bookName, bookId, chapterId } = useParams();
    const [currentChapter, setCurrentChapter] = useState(chapterId);
    const [listPage, setListPage] = useState([]);
    const [listChapter, setListChapter] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const getListChapter = async () => {
            const res = await get('/comic-chapter-list', {
                params: {
                    bookId: bookId,
                    size: 2000,
                    page: 1,
                    sortOder: 1,
                },
            });
            const data = JSON.parse(res);
            setListChapter(data.chapters);
        };

        getListChapter();
    }, []);

    useEffect(() => {
        const getPage = async () => {
            const res = await get('/comic-chapter-guest', {
                params: {
                    chapterId: currentChapter,
                },
            });
            setListPage(res);
            console.log(res);
        };

        getPage();
    }, [currentChapter]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        const handleScroll = () => {
            if (window.scrollY >= 205) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChangeChapter = (e) => {
        setCurrentChapter(e.target.value);
    };

    return (
        <>
            <Header relative />
            {visible && (
                <div className={cx('header')}>
                    <div className={cx('header-left')}>
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                        <Link to={`/comic/${bookName}/${bookId}`} className={cx('comic-name')}>
                            {bookName}
                        </Link>
                    </div>
                    <div className={cx('dropdown-group')}>
                        <Button roundedBlack leftIcon={<img src={back} alt="" />}>
                            Chap trước
                        </Button>
                        <select className={cx('dropdown')} onChange={handleChangeChapter}>
                            {listChapter.map((item, index) => (
                                <option key={index} value={item.id}>{`Chap ${index + 1}`}</option>
                            ))}
                        </select>
                        <Button primary rightIcon={<img src={ahead} alt="" />}>
                            Chap sau
                        </Button>
                    </div>
                    <div className={cx('header-right')}></div>
                </div>
            )}
            <div className={cx('wrapper')}>
                <div className={cx('top')}>
                    <h1>Chiến Thần Cuồng Phi</h1>
                    <p className={cx('view-wrapper')}>
                        <span>Đăng lúc 20:13 20/12/2022</span>
                        <p className={cx('view')}>
                            <img src={eye} alt="" className={cx('icon-eye')} />
                            <span>20.5k</span>
                        </p>
                    </p>
                    <div className={cx('dropdown-group')}>
                        <Button roundedBlack leftIcon={<img src={back} alt="" />}>
                            Chap trước
                        </Button>
                        <select className={cx('dropdown')} onChange={(e) => handleChangeChapter(e)}>
                            {listChapter.map((item, index) => (
                                <option key={index} value={item.id}>{`Chap ${index + 1}`}</option>
                            ))}
                        </select>
                        <Button primary rightIcon={<img src={ahead} alt="" />}>
                            Chap sau
                        </Button>
                    </div>
                </div>
                <div className={cx('inner')}>
                    <div className={cx('content')}>
                        {listPage.map((item, index) => (
                            <img src={item.pageImgUrl} alt="" key={index} className={cx('image')} />
                        ))}
                    </div>
                </div>
                {/* <div className={cx('bottom')}>
                    <Button roundedBlack leftIcon={<img src={back} alt="" />}>
                        Chap trước
                    </Button>
                    <Button primary rightIcon={<img src={ahead} alt="" />}>
                        Chap sau
                    </Button>
                </div> */}
            </div>
            <Footer />
        </>
    );
}

export default ReadingPage;
