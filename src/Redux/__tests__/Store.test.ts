import configureMockStore from 'redux-mock-store';

import createSagaMiddleware from 'redux-saga';
import { getPostsRequest, getPostsSuccess, getPostsFailed } from '../Actions';
import { GetPostsMock } from '../../Types/data/GetPostMock';

import rootSaga from '../Sagas';
import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAILED,
} from '../Types';
import Api from '../../Services/Api';

// configure the mockStore function
// note: if this begins to be used in several places, make a helper
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

// tests
describe('getPostsRequest', () => {
	// success test with store
	it(`creates ${GET_POSTS_REQUEST} ${GET_POSTS_SUCCESS} after successfully fetching posts`, (done) => {
		// mocking api call
		Api.getPosts = jest.fn(() => Promise.resolve(GetPostsMock));

		const expectedActions = [
			getPostsRequest(),
			getPostsSuccess(GetPostsMock),
		];

		const initialState = {
			error: null,
			data: {},
		};

		const store = mockStore(initialState);
		sagaMiddleware.run(rootSaga);

		store.subscribe(() => {
			const actions = store.getActions();
			if (actions.length >= expectedActions.length) {
				expect(actions).toEqual(expectedActions);
				done();
			}
		});

		store.dispatch(getPostsRequest());
	});

	// failure test with store
	it(`creates ${GET_POSTS_REQUEST} ${GET_POSTS_FAILED} after failing to fetching posts`, (done) => {
		const error = new Error('some error');
		Api.getPosts = jest.fn(() => Promise.reject(error));

		const expectedActions = [getPostsRequest(), getPostsFailed(error)];

		const initialState = {
			error: null,
			data: {},
		};

		const store = mockStore(initialState);
		sagaMiddleware.run(rootSaga);

		store.subscribe(() => {
			const actions = store.getActions();
			if (actions.length >= expectedActions.length) {
				expect(actions).toEqual(expectedActions);
				done();
			}
		});

		store.dispatch(getPostsRequest());
	});
});
