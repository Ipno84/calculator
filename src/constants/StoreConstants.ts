import storage from 'redux-persist/lib/storage';

export const Config = {
    version: 0,
    key: 'calculator',
    storage,
    debug: process.env.NODE_ENV === 'development',
    whietelist: [],
    blacklist: [],
};

export const CALCULATOR_REDUCER_NAME: string = 'calculator';
