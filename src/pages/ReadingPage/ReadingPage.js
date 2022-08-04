import className from 'classnames/bind';
import Footer from '~/layouts/Footer/Footer';
import Header from '~/layouts/Header/Header';
import styles from './ReadingPage.module.scss';
import back from '~/assets/images/goback.svg';
import ahead from '~/assets/images/goahead.svg';
import { get } from '~/utils/httpRequest';
import { useEffect, useState } from 'react';
import Button from '~/components/Button/Button';

const cx = className.bind(styles);

function ReadingPage() {
    const [chapter, setChapter] = useState([]);

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

    return (
        <>
            <div className={cx('header')}></div>
            <div className={cx('wrapper')}>
                <div className={cx('top')}>
                    <h2>Chiến thần cuồng phi</h2>
                    <span>Đăng lúc 20:13 20/12/2022</span>
                    <span>20.5k</span>
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
                <div className={cx('bottom')}>
                    <Button roundedBlack leftIcon={<img src={back} alt="" />}>
                        Chap trước
                    </Button>
                    <Button primary rightIcon={<img src={ahead} alt="" />}>
                        Chap sau
                    </Button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ReadingPage;
