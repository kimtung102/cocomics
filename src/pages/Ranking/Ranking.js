import classNames from 'classnames/bind';
import axios from 'axios';
import styles from './Ranking.module.scss';
import Header from '~/layouts/Header/Header';
import CustomSelect from '~/components/Select/CustomSelect';
import Button from '~/components/Button/Button';
import { useEffect, useState, useRef } from 'react';
import CardPost from '~/components/ComicCard/CardPost';

const cx = classNames.bind(styles);

const options = [
    { label: 'Theo tuần', value: 3 },
    { label: 'Tổng', value: 1 },
    { label: 'Theo tháng', value: 2 },
];
const filters = [
    { label: 'Lượt thích', active: true, id: 1 },
    { label: 'Lượt xem', active: false, id: 2 },
];
const tags = [
    { label: '#romance' },
    { label: '#action' },
    { label: '#Trinh thám' },
    { label: '#Manhwa' },
    { label: '#manhua' },
    { label: '#comic' },
    { label: '#magic' },
    { label: '#fantasy' },
];

function Ranking() {
    const [cardPostDataLike, setCardPostDataLike] = useState([]);
    const [cardPostDataView, setCardPostDataView] = useState([]);
    const [active, setActive] = useState(1);
    const type = useRef(3);

    const filterChoose = useRef(1);

    const handleSelect = (e) => {
        type.current = e.target.value;
        if (filterChoose.current === 1) {
            listComicByLikeApi();
        } else if (filterChoose.current === 2) {
            listComicByViewApi();
        }
    };
    const handleFilter = (id) => {
        if (id === 1) {
            listComicByLikeApi();
        } else {
            listComicByViewApi();
        }
    };
    const listComicByLikeApi = async () => {
        try {
            const res = await axios.get(`https://apicocomic.herokuapp.com/rest/Service/comic-rank-like-no`, {
                params: {
                    orderType: type.current,
                    top: 10,
                },
            });
            setCardPostDataLike(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    const listComicByViewApi = async () => {
        try {
            const res = await axios.get(`https://apicocomic.herokuapp.com/rest/Service/comic-rank-view-no`, {
                params: {
                    orderType: type.current,
                    top: 10,
                },
            });
            setCardPostDataView(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        listComicByLikeApi();
    }, []);
    useEffect(() => {
        listComicByViewApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('inner')}>
                <div className={cx('title-ranked')}>
                    <h3 className={cx('title')}>Bảng xếp hạng</h3>
                    <CustomSelect
                        className={cx('select')}
                        defaultValue={options[2]}
                        options={options}
                        onChange={handleSelect}
                    />
                </div>
                <div className={cx('content')}>
                    <div className={cx('sidebar')}>
                        <div className={cx('sidebar-btn')}>
                            {filters.map((filter) => (
                                <Button
                                    key={filter.id}
                                    onClick={() => {
                                        setActive(filter.id);
                                        filterChoose.current = filter.id;
                                        handleFilter(filter.id);
                                    }}
                                    active={active === filter.id}
                                    outline
                                >
                                    {filter.label}
                                </Button>
                            ))}
                        </div>
                        <div className={cx('sidebar-tag')}>
                            {tags.map((tag) => (
                                <Button key={tag.label} tag>
                                    {tag.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className={cx('post')}>
                        {(filterChoose.current === 1 ? cardPostDataLike : cardPostDataView)?.map((data, index) => (
                            <CardPost className={cx('card-post')} key={data.id} cardPost={data} stt={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ranking;
