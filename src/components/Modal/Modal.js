import className from 'classnames/bind';
import styles from './Modal.module.scss';
import arrow from '~/assets/images/arrow-left.svg';
import Button from '../Button/Button';
import backIcon from '~/assets/images/back-icon.svg';

import { post, put } from '~/utils/httpRequest';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userAuth, userInfoState, userIdState } from '~/states/userState';
import { popupState } from '~/states/popupState';
import InputField from './InputField';
import { useNavigate } from 'react-router-dom';
import { get } from '~/utils/httpRequest';
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

const schemaChangePass = yup.object().shape({
    username: yup.string().required('Vui lòng nhập tên tài khoản!'),
    password: yup.string().min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự!').required('Vui lòng nhập mật khẩu!'),
    newPass: yup.string().min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự!').required('Vui lòng nhập mật khẩu!'),
});

function Modal({ popup }) {
    const setP = useSetRecoilState(popupState);
    const setIsLogin = useSetRecoilState(userAuth);
    const setUserId = useSetRecoilState(userIdState);

    let navigate = useNavigate();

    const handleLogin = async (value) => {
        const res = await post('/sign-in', JSON.stringify(value));
        if (res.id > 0) {
            alert('Đăng nhập thành công!');
            setP(0);
            window.localStorage.setItem('isLogin', true);
            const login = window.localStorage.getItem('isLogin');
            setIsLogin(login);
            setUserId(res.userId);
            navigate('/');
        } else {
            alert('Tài khoản hoặc mật khẩu không chính xác!');
        }
    };

    const handleRegister = async ({ username, password }) => {
        const data = {
            username,
            password,
        };
        console.log(data);
        const res = await post('/register', JSON.stringify(data));
        console.log(res);
        if (res.userId > 0) {
            alert('Đăng ký thành công, đăng nhập ngay!');
            setP(1);
        } else {
            alert('Tên tài khoản đã tồn tại!');
        }
    };

    const handleChangePass = async (value) => {
        console.log(value);
        const res = await put('/change-password', JSON.stringify(value));
        console.log(res);
        if (res.id > 0) {
            alert('Đặt mật khẩu mới thành công, đăng nhập ngay!');
            setP(0);
        } else {
            alert('Sai thông tin xác thực!');
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
                        {popup === 3 && <p className={cx('title-changePass')}>Đổi mật khẩu</p>}
                        <span className={cx('cancel')} onClick={() => setP(0)}>
                            <img src={backIcon} alt="back" width={'17px'}></img>
                        </span>
                        <div className={cx('modal-inner')}>
                            {popup === 1 && (
                                <Formik
                                    validationSchema={schemaLogin}
                                    onSubmit={(val) => handleLogin(val)}
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
                                                </div>
                                            </Form>
                                        </div>
                                    )}
                                </Formik>
                            )}
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
                            {popup === 3 && (
                                <Formik
                                    validationSchema={schemaChangePass}
                                    onSubmit={(val) => handleChangePass(val)}
                                    initialValues={{
                                        username: '',
                                        password: '',
                                        newPass: '',
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
                                                <InputField
                                                    label="Mật khẩu hiện tại"
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    isInvalid={touched.password && !!errors.password}
                                                    message={errors.password}
                                                />
                                                <InputField
                                                    label="Mật khẩu mới"
                                                    type="password"
                                                    id="newPass"
                                                    name="newPass"
                                                    isInvalid={touched.newPass && !!errors.newPass}
                                                    message={errors.newPass}
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
                                    <div className={cx('wrapper-btn')}>
                                        <Button text onClick={() => alert('Tính năng đang được phát triển!')}>
                                            Quên mật khẩu?
                                        </Button>
                                        <div className={cx('btn-sign-in')}>
                                            <p className={cx('sign-text')}>Chưa có tài khoản?</p>
                                            <Button text onClick={() => setP(2)}>
                                                Đăng ký
                                            </Button>
                                        </div>
                                    </div>
                                </>
                            )}
                            {popup === 2 && (
                                <>
                                    <div className={cx('margin20')}>
                                        <p className={cx('sign-text')}>Đã có tài khoản?</p>
                                        <Button text onClick={() => setP(1)}>
                                            Đăng nhập
                                        </Button>
                                    </div>
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
