// >>>>>>> LIBRARIES
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistCombineReducers } from 'redux-persist';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';

// >>>>>>> ASSETS
import rootReducer from './Reducers';
import rootSaga from './Sagas';

const reducers = persistCombineReducers({
    key: "root",
    storage: AsyncStorage
}, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
const enhancers = [];
middlewares.push(sagaMiddleware, logger);
enhancers.push(applyMiddleware(...middlewares));

export const store = createStore(
    reducers,
    compose(...enhancers),
);

// >>>>>>> persistStore contains all the data from store
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);