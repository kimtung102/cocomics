import Pagination from 'react-bootstrap/Pagination';
import className from 'classnames/bind';
import styles from './PageBar.module.scss';

const cx = className.bind(styles);

function PageBar({ pagination, onPageChange }) {
    const { current, size, totalRow } = pagination;

    const totalPage = Math.ceil(totalRow / size);

    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage);
        }
    };

    let items = [];
    if (current >= 5) {
        items.push(<Pagination.First key="first" onClick={() => handlePageChange(1)} />);
    }

    if (current > 1) {
        items.push(<Pagination.Prev key="prev" onClick={() => handlePageChange(current - 1)} />);
    }

    if (current < totalPage - 4 && current > 5) {
        items.push(
            <>
                <Pagination.Item
                    key="sub-first"
                    active={current - 5 === current}
                    onClick={() => handlePageChange(current - 5)}
                >
                    {current - 5}
                </Pagination.Item>
                <Pagination.Ellipsis />
            </>,
        );
    }
    if (current > 5 && current <= totalPage - 5) {
        for (let page = current - 2; page <= current + 2; page++) {
            items.push(
                <Pagination.Item key={page} active={page === current} onClick={() => handlePageChange(page)}>
                    {page}
                </Pagination.Item>,
            );
        }
    } else if (current <= 5) {
        for (let page = current; page < current + 5; page++) {
            items.push(
                <Pagination.Item key={page} active={page === current} onClick={() => handlePageChange(page)}>
                    {page}
                </Pagination.Item>,
            );
        }
    } else if (current >= totalPage - 5) {
        for (let page = totalPage - 4; page <= totalPage; page++) {
            items.push(
                <Pagination.Item key={page} active={page === current} onClick={() => handlePageChange(page)}>
                    {page}
                </Pagination.Item>,
            );
        }
    }

    if (current < totalPage - 4 && current > 5) {
        items.push(
            <>
                <Pagination.Ellipsis />
                <Pagination.Item
                    key="sub-last"
                    active={current + 5 === current}
                    onClick={() => handlePageChange(current + 5)}
                >
                    {current + 5}
                </Pagination.Item>
            </>,
        );
    }

    if (current < totalPage) {
        items.push(<Pagination.Next key="next" onClick={() => handlePageChange(current + 1)} />);
    }
    if (current < totalPage - 5) {
        items.push(<Pagination.Last key="last" onClick={() => handlePageChange(totalPage)} />);
    }

    return (
        <div className={cx('pagination')}>
            <Pagination size="lg">{items}</Pagination>
        </div>
    );
}

export default PageBar;
