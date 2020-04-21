import mainSaga from './MainSaga';

const rootSaga = function* rootSaga() {
    yield* mainSaga()
}

export default rootSaga;