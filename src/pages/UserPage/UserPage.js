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
                                Thay ảnh bìa
                            </Button>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <p className={cx('username')}>{userInfo?.username}</p>
                        <p className={cx('id')}>ID: {userInfo?.id}</p>
                        <div className={cx('sub-info')}>
                            <span className={cx('id')}>
                                <img src={calendar} alt="calendar" />
                                Tham gia vào: 7/14/2022
                            </span>
                            <span className={cx('id')}>
                                <img src={mappin} alt="vi tri" />
                                Hà Nội, Việt Nam
                            </span>
                        </div>
                        {isUpdate || (
                            <span className={cx('btn-update')}>
                                <Button primary small onClick={handleUpdate}>
                                    Sửa thông tin
                                </Button>
                            </span>
                        )}
                        <div className={cx('main-info')}>
                            <div className={cx('form-item')}>
                                <label htmlFor="username" className={cx('label')}>
                                    Tên người dùng:
                                </label>
                                {isUpdate ? (
                                    <input className={cx('input')} id="username" type="text" />
                                ) : (
                                    <p>thedc123233</p>
                                )}
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="email" className={cx('label')}>
                                    Địa chỉ email:
                                </label>
                                {isUpdate ? (
                                    <input className={cx('input')} id="email" type="text" />
                                ) : (
                                    <p>tungnk20@gmail.com</p>
                                )}
                            </div>
                            <div className={cx('form-item')}>
                                <p htmlFor="username" className={cx('label')}>
                                    Giới tính:
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
                                        Nữ
                                    </label>
                                    <input className={cx('radio-input')} id="other" type="radio" name="gender" />
                                    <label htmlFor="other" className={cx('radio-label')}>
                                        Khác
                                    </label>
                                </div>
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="address" className={cx('label')}>
                                    Địa chỉ:
                                </label>
                                {isUpdate ? (
                                    <input className={cx('input')} id="address" type="text" />
                                ) : (
                                    <p>số 1 Đường 18M, P. Mộ Lao, Hà Đông, Hà Nội, Việt Nam</p>
                                )}
                            </div>
                            <div className={cx('form-item')}>
                                <label htmlFor="detail" className={cx('label')}>
                                    Chi tiết:
                                </label>
                                {isUpdate ? (
                                    <textarea
                                        className={cx('text-area')}
                                        id="detail"
                                        rows="6"
                                        cols="60"
                                        placeholder="Miêu tả về bạn"
                                    />
                                ) : (
                                    <p className={cx('info-detail')}>
                                        Đã bao giờ bạn tự hỏi liệu người bạn thích có đang mơ về bạn không? Với khả năng
                                        đi vào giấc mơ của người khác, cô giáo Yeoreum Han không cần phải đoán: cô ấy có
                                        thể biến nó thành hiện thực. Cô ấy thậm chí có thể kết nối giấc mơ của hai người
                                        với nhau và sử dụng khả năng này để chơi trò chơi mai mối cho học sinh của mình.
                                    </p>
                                )}
                            </div>
                            {isUpdate && (
                                <div className={cx('btn-save')}>
                                    <Button primary onClick={() => setIsUpdate(false)}>
                                        Lưu thay đổi
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
