// >>>>>>> LIBRARIES
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { persistStore, persistCombineReducers } from 'redux-persist';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';

// compose dev tools
import { composeWithDevTools } from 'redux-devtools-extension';

// >>>>>>> ASSETS
import rootReducer from './Reducers';
import rootSaga from './Sagas';

const reducers = persistCombineReducers(
	{
		key: 'root',
		storage: AsyncStorage,
	},
	rootReducer
);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
const enhancers = [];
middlewares.push(sagaMiddleware, logger);
enhancers.push(applyMiddleware(...middlewares));

// type/interface
export type AppState = ReturnType<typeof reducers>;

export const store = createStore(reducers, composeWithDevTools(...enhancers));

// >>>>>>> persistStore contains all the data from store
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
