import storage from 'redux-persist/lib/storage';

export const CALCULATOR_REDUCER_NAME: CalculatorStoreName = 'calculator';

export const Config = {
    version: 0,
    key: 'calculator',
    storage,
    debug: process.env.NODE_ENV === 'development',
    blacklist: [CALCULATOR_REDUCER_NAME],
};
