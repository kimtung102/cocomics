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

const cx = className.bind(styles);

function ReadingPage() {
    const [chapter, setChapter] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const getPage = async () => {
            const res = await get('/comic-chapter-guest', {
                params: {
                    chapterId: '4E373577-D719-4092-9264-6BF0B100CAA6',
                },
            });
            setChapter(res);
            console.log(res);
        };

        getPage();
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        const handleScroll = () => {
            if (window.scrollY >= 115) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {visible && (
                <div className={cx('header')}>
                    <div className={cx('header-left')}>
                        <a href="/">
                            <img src={logo} alt="" />
                        </a>
                        <a href="/" className={cx('comic-name')}>
                            Chiến Thần Cuồng Phi
                        </a>
                    </div>
                    <div className={cx('dropdown-group')}>
                        <Button roundedBlack leftIcon={<img src={back} alt="" />}>
                            Chap trước
                        </Button>
                        <select className={cx('dropdown')}>
                            <option>Chapter 1: Linh hồn bất diệt</option>
                            <option>Chapter 2: Linh hồn bất diệt</option>
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
                        <select className={cx('dropdown')}>
                            <option>Chapter 1: Linh hồn bất diệt</option>
                            <option>Chapter 2: Linh hồn bất diệt</option>
                        </select>
                        <Button primary rightIcon={<img src={ahead} alt="" />}>
                            Chap sau
                        </Button>
                    </div>
                </div>
                <div className={cx('inner')}>
                    <div className={cx('content')}>
                        {chapter.map((item, index) => (
                            <img
                                src={item?.pageImgUrl ? item.pageImgUrl : ''}
                                alt=""
                                key={index}
                                className={cx('image')}
                            />
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
