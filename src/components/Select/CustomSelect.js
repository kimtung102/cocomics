import React from 'react';
import classNames from 'classnames/bind';
import Styles from './CustomSelect.module.scss';

const cx = classNames.bind(Styles);
function CustomSelect({ options, defaultValue, onChange }) {
    // onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    return (
        <div>
            <select className={cx('select')} onChange={onChange} defaultValue={defaultValue}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CustomSelect;
