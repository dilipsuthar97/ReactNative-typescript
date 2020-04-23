import { all, fork } from 'redux-saga/effects';
import mainSaga from './MainSaga';

const rootSaga = function* rootSaga() {
	// yield* mainSaga()
	yield all([fork(mainSaga)]);
};

export default rootSaga;
