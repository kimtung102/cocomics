import { atom } from 'recoil';

export const userAuth = atom({
    key: 'userAuth',
    default: window.localStorage.getItem('isLogin'),
});

export const userInfoState = atom({
    key: 'userInfo',
    default: null,
});

export const userIdState = atom({
    key: 'userId',
    default: '',
});
