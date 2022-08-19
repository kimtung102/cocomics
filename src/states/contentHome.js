import { atom } from 'recoil';

export const highlightWeekState = atom({
    key: 'highlightWeek',
    default: [],
});

export const comicRisingState = atom({
    key: 'comicRising',
    default: [],
});

export const comicLatestState = atom({
    key: 'comicLatestWeek',
    default: [],
});
