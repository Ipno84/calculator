import { Reducer, createStore } from 'redux';

import createReducer from './createReducer';
import { persistStore } from 'redux-persist';
import rootReducers from './../reducers';

function configureStore() {
    let store: any = createStore(createReducer({}));
    let persistor = persistStore(store, null, () => {
        store.getState();
    });

    (store as any).asyncReducers = { ...rootReducers };
    (store as any).injectReducer = (key: string, asyncReducer: Reducer) => {
        if (!(store as any).asyncReducers[key]) {
            (store as any).asyncReducers[key] = asyncReducer;
            store.replaceReducer(createReducer((store as any).asyncReducers));
            persistor.persist();
        }
    };

    return { store, persistor };
}
const { store, persistor } = configureStore();

export { store, persistor };
