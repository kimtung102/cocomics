import className from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { get } from '~/utils/httpRequest';
import searchIcon from '~/assets/images/search-icon.svg';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import SearchPopover from './SearchPopover';
import { useEffect, useRef, useState } from 'react';
import useDebounce from '~/customHooks/useDebounce';

const cx = className.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isInputFocus, setIsInputFocus] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debouncedValue = useDebounce(searchValue, 500);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        const fetch = async () => {
            const res = await get('/search-comic-by-name', {
                params: {
                    name: encodeURIComponent(debouncedValue),
                },
            });
            console.log(res);
            setSearchResult(res);
            setLoading(false);
        };

        fetch();
    }, [debouncedValue]);

    return (
        <Tippy
            interactive
            visible={isInputFocus && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-popover')} {...attrs}>
                    {searchResult.map((comic) => (
                        <SearchPopover key={comic.id} data={comic} />
                    ))}
                </div>
            )}
            onClickOutside={() => setIsInputFocus(false)}
        >
            <div className={cx('search')}>
                <img src={searchIcon} alt="searchIcon" className={cx('search-icon')} />
                <input
                    ref={inputRef}
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Tìm kiếm..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsInputFocus(true)}
                ></input>
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}
            </div>
        </Tippy>
    );
}

export default Search;
