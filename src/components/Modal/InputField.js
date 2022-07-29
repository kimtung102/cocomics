import className from 'classnames/bind';
import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useField } from 'formik';

const cx = className.bind(styles);

function InputField({ label, isInvalid, message, ...props }) {
    const [field, meta] = useField(props);

    return (
        <div className={cx('form-item')}>
            <label htmlFor={field.name} className={cx('label')}>
                {label}
            </label>
            <br />
            <input className={cx('input')} {...field} {...props} />
            <p className={cx('invalid')}>
                {isInvalid && (
                    <>
                        <FontAwesomeIcon icon={faCircleExclamation} className={cx('icon')} />
                        <span className={cx('error')}>{message}</span>
                    </>
                )}
            </p>
        </div>
    );
}

export default InputField;
