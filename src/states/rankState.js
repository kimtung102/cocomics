import { atom } from 'recoil';

export const rankDayState = atom({
    key: 'rankDay',
    default: [],
});

export const rankWeekState = atom({
    key: 'rankWeek',
    default: [],
});

export const rankMonthState = atom({
    key: 'rankMonth',
    default: [],
});
