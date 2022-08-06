import className from 'classnames/bind';
import styles from './Card.module.scss';

import img1 from '~/assets/images/test-1.jpg';
import img2 from '~/assets/images/test-4.jpg';
import img3 from '~/assets/images/test-3.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

const listComic = [
    {
        id: 1,
        bg: img1,
        title: 'Hoàng tử người sói hung tợn',
        category: 'Fantasy - KimTung',
        summary: `Đây là câu chuyện về một thanh niên đạt được sức mạnh đỉnh cao trong cả ba con đường tu luyện: linh hồn, năng lượng và thể xác, do một sự kiện có một không hai đã cho anh tài năng để tu luyện chúng khi anh hai mươi tuổi. Tất cả những điều này xảy ra trong một vũ trụ do Chúa cai trị. Nhưng sau sự kiện độc đáo đó, anh ấy đã du hành đến một vũ trụ khác`,
    },
    {
        id: 2,
        bg: img2,
        title: 'Tái sinh với một Glitch',
        category: 'Action - HaVu',
        summary: `Trò chơi này có hai sự lựa chọn: trở thành một anh hùng tái sinh ở thế giới khác hoặc nhận nhiệm vụ như một vị thần hướng dẫn những người như vậy. Một người đàn ông chọn cái thứ hai và trở thành Raymund, vị thần của hy vọng. Anh được giao nhiệm vụ cử các anh hùng đến cầu nguyện cho mọi người trong thế giới phàm trần. Sau khi các anh hùng của anh ấy hoàn thành các nhiệm vụ khác nhau`,
    },
    {
        id: 3,
        bg: img3,
        title: 'Trò chơi mô phỏng luân hồi',
        category: 'Adventure - TranHuong',
        summary: `Đã bao giờ bạn tự hỏi liệu người bạn thích có đang mơ về bạn không? Với khả năng đi vào giấc mơ của
        người khác, cô giáo Yeoreum Han không cần phải đoán: cô ấy có thể biến nó thành hiện thực. Cô ấy
        thậm chí có thể kết nối giấc mơ của hai người với nhau và sử dụng khả năng này để chơi trò chơi mai
        mối cho học sinh của mình`,
    },
];

function Card() {
    const [index, setIndex] = useState(3);
    const [content, setContent] = useState(listComic[2]);

    const handleContent1 = () => {
        setIndex(1);
        setContent(listComic[0]);
    };
    const handleContent2 = () => {
        setIndex(2);
        setContent(listComic[1]);
    };
    const handleContent3 = () => {
        setIndex(3);
        setContent(listComic[2]);
    };

    useEffect(() => {
        const time = setInterval(() => {
            if (index === 1) handleContent2();
            else if (index === 2) handleContent3();
            else handleContent1();
        }, 5000);

        return () => {
            clearInterval(time);
        };
    }, [index]);

    return (
        <div className={cx('wrapper-large-1')}>
            <div
                className={cx('wrapper')}
                style={{
                    backgroundImage: `url(${content.bg})`,
                }}
            >
                <span className={cx('image', index === 2 && 'sub1', index === 3 && 'sub2')} onClick={handleContent1}>
                    <img src={img1} alt="thumnail" />
                </span>
                <span className={cx('image', index === 3 && 'sub1', index === 1 && 'sub2')} onClick={handleContent2}>
                    <img src={img2} alt="thumnail" />
                </span>
                <span className={cx('image', index === 1 && 'sub1', index === 2 && 'sub2')} onClick={handleContent3}>
                    <img src={img3} alt="thumnail" />
                </span>
            </div>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <Link to={`/comic/${content.title}/${content.id}`} className={cx('title')}>
                        {content.title}
                    </Link>
                    <Link to={`/category/${content?.category}`} className={cx('category')}>
                        {content.category}
                    </Link>
                </div>
                <span className={cx('summary')}>{content.summary}</span>
            </div>
        </div>
    );
}

export default Card;
