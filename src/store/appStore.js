import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from 'reducers/appReducer';
import createSagaMiddleware from 'redux-saga';
import { sagas } from 'sagas';

const sagaMiddleware = createSagaMiddleware();
export const appStore = configureStore({
    reducer: {
        appReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(sagas);
