import className from 'classnames/bind';
import styles from './Modal.module.scss';
import arrow from '~/assets/images/arrow-left.svg';
import Button from '../Button/Button';
import backIcon from '~/assets/images/back-icon.svg';

import { post, get } from '~/utils/httpRequest';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { useRecoilState } from 'recoil';
import { popupState } from '~/states/popupState';
import InputField from './InputField';

const cx = className.bind(styles);

const schemaLogin = yup.object().shape({
    username: yup.string().required('Vui lòng nhập tên tài khoản!'),
    password: yup.string().min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự!').required('Vui lòng nhập mật khẩu!'),
});

const schemaSignup = yup.object().shape({
    username: yup.string().required('Vui lòng nhập tên tài khoản!'),
    password: yup.string().min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự!').required('Vui lòng nhập mật khẩu!'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp vui lòng kiểm tra lại!')
        .required('Vui lòng xác nhận mật khẩu của bạn!'),
});

const schemaForgot = yup.object().shape({
    username: yup.string().required('Vui lòng nhập tên tài khoản!'),
});

function Modal({ popup }) {
    const [p, setP] = useRecoilState(popupState);

    const handleRegister = async (value) => {
        console.log(value);
        const data = {
            accountName: value.username,
            password: value.password,
            nickName: 'tungtest',
        };
        console.log(data);
        try {
            const res = await post('/register', JSON.stringify(data));
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    if (popup === 0) {
        return null;
    } else
        return (
            <div className={cx('modal')}>
                <div className={cx('modal-overlay')}></div>
                <div className={cx('modal-body')}>
                    <div className={cx('modal-linear')}>
                        {popup === 1 && (
                            <div className={cx('popup-title')}>
                                <span className={cx('back')} onClick={() => setP(0)}>
                                    <img src={arrow} alt="arrow" width={'20px'}></img>
                                </span>
                                <p className={cx('title')}>Đăng nhập</p>
                            </div>
                        )}
                        {popup === 2 && (
                            <div className={cx('popup-title')}>
                                <span className={cx('back')} onClick={() => setP(1)}>
                                    <img src={arrow} alt="arrow" width={'20px'}></img>
                                </span>
                                <p className={cx('title')}>Đăng ký</p>
                            </div>
                        )}
                        {popup === 3 && (
                            <div className={cx('popup-title')}>
                                <span className={cx('back')} onClick={() => setP(2)}>
                                    <img src={arrow} alt="arrow" width={'20px'}></img>
                                </span>
                                <p className={cx('title')}>Quên mật khẩu</p>
                            </div>
                        )}
                        <span className={cx('cancel')} onClick={() => setP(0)}>
                            <img src={backIcon} alt="back" width={'17px'}></img>
                        </span>
                        <div className={cx('modal-inner')}>
                            {popup === 2 && (
                                <Formik
                                    validationSchema={schemaSignup}
                                    onSubmit={(val) => handleRegister(val)}
                                    initialValues={{
                                        username: '',
                                        password: '',
                                        confirmPassword: '',
                                    }}
                                >
                                    {({ handleSubmit, touched, errors }) => (
                                        <div className={cx('form-wrapper')}>
                                            <Form noValidate onSubmit={handleSubmit}>
                                                <InputField
                                                    label="Tên đăng nhập"
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    className={cx('input')}
                                                    isInvalid={touched.username && !!errors.username}
                                                    message={errors.username}
                                                />
                                                <InputField
                                                    label="Mật khẩu"
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    className={cx('input')}
                                                    isInvalid={touched.password && !!errors.password}
                                                    message={errors.password}
                                                />
                                                <InputField
                                                    label="Nhập lại mật khẩu"
                                                    type="password"
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    className={cx('input')}
                                                    isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                                                    message={errors.confirmPassword}
                                                />
                                                <div className={cx('btn-signup')}>
                                                    <Button large type="submit">
                                                        Đăng ký
                                                    </Button>
                                                </div>
                                            </Form>
                                        </div>
                                    )}
                                </Formik>
                            )}
                            {popup === 1 && (
                                <Formik
                                    validationSchema={schemaLogin}
                                    onSubmit={(val) => handleRegister(val)}
                                    initialValues={{
                                        username: '',
                                        password: '',
                                    }}
                                >
                                    {({ handleSubmit, touched, errors }) => (
                                        <div className={cx('form-wrapper')}>
                                            <Form noValidate onSubmit={handleSubmit}>
                                                <InputField
                                                    label="Tên đăng nhập/ Email"
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    isInvalid={touched.username && !!errors.username}
                                                    message={errors.username}
                                                />
                                                <InputField
                                                    label="Mật khẩu"
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    isInvalid={touched.password && !!errors.password}
                                                    message={errors.password}
                                                />
                                                <div className={cx('btn-signup')}>
                                                    <Button large type="submit">
                                                        Đăng Nhập
                                                    </Button>
                                                    <div className={cx('btn-forgot')}>
                                                        <Button text onClick={() => setP(3)}>
                                                            Quên mật khẩu?
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </div>
                                    )}
                                </Formik>
                            )}
                            {popup === 3 && (
                                <Formik
                                    validationSchema={schemaForgot}
                                    onSubmit={(val) => console.log(val)}
                                    initialValues={{
                                        username: '',
                                    }}
                                >
                                    {({ handleSubmit, touched, errors }) => (
                                        <div className={cx('form-wrapper')}>
                                            <Form noValidate onSubmit={handleSubmit}>
                                                <InputField
                                                    label="Tên đăng nhập"
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    isInvalid={touched.username && !!errors.username}
                                                    message={errors.username}
                                                />
                                                <div className={cx('btn-signup')}>
                                                    <Button large type="submit">
                                                        Xác nhận
                                                    </Button>
                                                </div>
                                            </Form>
                                        </div>
                                    )}
                                </Formik>
                            )}
                        </div>
                        <div className={cx('inner-sign')}>
                            {popup === 1 && (
                                <>
                                    <p className={cx('sign-text')}>Chưa có tài khoản?</p>
                                    <Button text onClick={() => setP(2)}>
                                        Đăng ký
                                    </Button>
                                </>
                            )}
                            {popup === 2 && (
                                <>
                                    <p className={cx('sign-text')}>Đã có tài khoản?</p>
                                    <Button text onClick={() => setP(1)}>
                                        Đăng nhập
                                    </Button>
                                </>
                            )}
                        </div>
                        <div className={cx('inner-bottom')}>
                            <span className={cx('copyright')}>
                                <FontAwesomeIcon icon={faCopyright} />
                            </span>
                            <p className={cx('content')}> 2022 Cocomics | Điều khoản dịch vụ | Chính sách bảo mật</p>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Modal;
