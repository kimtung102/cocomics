import { atom } from 'recoil';

export const popupState = atom({
    key: 'popupController',
    default: {
        type: 1,
        popup: 1,
    },
});
