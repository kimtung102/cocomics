import { atom } from 'recoil';

export const categoryState = atom({
    key: 'categoryList',
    default: [],
});