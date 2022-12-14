import className from 'classnames/bind';
import styles from './UserPage.module.scss';

import Header from '~/layouts/Header/Header';
import m_avatar from '~/assets/images/user-avatar.png';
import camera from '~/assets/images/camera-icon.svg';
import camera2 from '~/assets/images/camera-icon2.svg';
import coverImage from '~/assets/images/cover-image.svg';
import calendar from '~/assets/images/calendar-icon.svg';
import mappin from '~/assets/images/mappin-icon.svg';
import Button from '~/components/Button/Button';
import Footer from '~/layouts/Footer/Footer';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '~/states/userState';

const cx = className.bind(styles);

function UserPage() {
    const [avatar, setAvatar] = useState();
    const [isUpdate, setIsUpdate] = useState(false);
    const userInfo = useRecoilValue(userInfoState);

    useEffect(() => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }, []);

    const handleUpdate = () => {
        setIsUpdate(true);
        window.scrollTo({ left: 0, top: 440, behavior: 'smooth' });
    };

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    };

    return (
        <>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('cover-image')}>
                        <div className={cx('overlay')}></div>
                        <img src={coverImage} alt="anh bia" />
                        <div className={cx('avatar-wrapper')}>
                            <img
                                src={userInfo?.nickName || (avatar && avatar.preview) || m_avatar}
                                alt=""
                                className={cx('avatar')}
                            />
                        </div>
                        <label className={cx('camera')}>
                            <img src={camera} alt="" />
                            <input type="file" onChange={(e) => handleChangeAvatar(e)} style={{ display: 'none' }} />
                        </label>
                        <div className={cx('btn-cover-image')}>
                            <Button leftIcon={<img src={camera2} alt="" />} grey>
                                Thay ???nh b??a
                            </Button>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <p className={cx('username')}>{userInfo?.username}</p>
                        <p className={cx('id')}>ID: {userInfo?.id}</p>
                        <div className={cx('sub-info')}>
                            <span className={cx('id')}>
                                <img src={calendar} alt="calendar" />
                                Tham gia v??o: 7/14/2022
                            </span>
                            <span className={cx('id')}>
                                <img src={mappin} alt="vi tri" />
                                H?? N???i, Vi???t Nam
                            </span>
                        </div>
                        {isUpdate || (
                            <span className={cx('btn-update')}>
                                <Button primary small onClick={handleUpdate}>
                                    S???a th??ng tin
                                </Button>
                            </span>
                        )}
                        <div className={cx('main-info')}>
                            <div className={cx('form-item')}>
                                <label htmlFor="username" className={cx('label')}>
                                    T??n ng?????i d??ng:
                                </label>
                                {isUpdate ? (
                                    <input className={cx('input')} id="username" type="text" />
                                ) : (
                                    <p>thedc123233</p>
                                )}
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="email" className={cx('label')}>
                                    ?????a ch??? email:
                                </label>
                                {isUpdate ? (
                                    <input className={cx('input')} id="email" type="text" />
                                ) : (
                                    <p>tungnk20@gmail.com</p>
                                )}
                            </div>
                            <div className={cx('form-item')}>
                                <p htmlFor="username" className={cx('label')}>
                                    Gi???i t??nh:
                                </p>
                                <div className={cx('radio')}>
                                    <input
                                        className={cx('radio-input')}
                                        id="male"
                                        type="radio"
                                        name="gender"
                                        defaultChecked
                                    />
                                    <label htmlFor="male" className={cx('radio-label')}>
                                        Nam
                                    </label>
                                    <input className={cx('radio-input')} id="female" type="radio" name="gender" />
                                    <label htmlFor="female" className={cx('radio-label')}>
                                        N???
                                    </label>
                                    <input className={cx('radio-input')} id="other" type="radio" name="gender" />
                                    <label htmlFor="other" className={cx('radio-label')}>
                                        Kh??c
                                    </label>
                                </div>
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="address" className={cx('label')}>
                                    ?????a ch???:
                                </label>
                                {isUpdate ? (
                                    <input className={cx('input')} id="address" type="text" />
                                ) : (
                                    <p>s??? 1 ???????ng 18M, P. M??? Lao, H?? ????ng, H?? N???i, Vi???t Nam</p>
                                )}
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="detail" className={cx('label')}>
                                    Chi ti???t:
                                </label>
                                {isUpdate ? (
                                    <textarea
                                        className={cx('text-area')}
                                        id="detail"
                                        rows="6"
                                        cols="60"
                                        placeholder="Mi??u t??? v??? b???n"
                                    />
                                ) : (
                                    <p className={cx('info-detail')}>
                                        ???? bao gi??? b???n t??? h???i li???u ng?????i b???n th??ch c?? ??ang m?? v??? b???n kh??ng? V???i kh??? n??ng
                                        ??i v??o gi???c m?? c???a ng?????i kh??c, c?? gi??o Yeoreum Han kh??ng c???n ph???i ??o??n: c?? ???y c??
                                        th??? bi???n n?? th??nh hi???n th???c. C?? ???y th???m ch?? c?? th??? k???t n???i gi???c m?? c???a hai ng?????i
                                        v???i nhau v?? s??? d???ng kh??? n??ng n??y ????? ch??i tr?? ch??i mai m???i cho h???c sinh c???a m??nh.
                                    </p>
                                )}
                            </div>
                            {isUpdate && (
                                <div className={cx('btn-save')}>
                                    <Button primary onClick={() => setIsUpdate(false)}>
                                        L??u thay ?????i
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UserPage;
