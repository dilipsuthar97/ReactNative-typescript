import { getState, getPostsSaga } from '../MainSaga';
import Api from '../../../Services/Api';
import { GET_POSTS_SUCCESS, GET_POSTS_FAILED } from '../../Types';
import { runSaga } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
	getPostsRequest,
	getPostsSuccess,
	getPostsFailed,
} from '../../Actions';
import { GetPostsMock } from '../../../Types/data/GetPostMock';

// types
import { AppState } from 'src/Redux/Store';
import { Post } from 'src/Types/Post.interface';
import { AppActions } from 'src/Types/Actions.interface';

// get posts
describe('getPosts', () => {
	it('success triggers success action with posts', () => {
		const generator = getPostsSaga();
		const response = GetPostsMock;

		Api.getPosts = jest.fn(() => Promise.resolve(GetPostsMock)); // Resolve API request

		expect(generator.next().value).toEqual(call(Api.getPosts));

		expect(generator.next(response).value).toEqual(
			put(getPostsSuccess(GetPostsMock))
		);

		expect(generator.next()).toEqual({ done: true, value: undefined });
	});

	it('failure triggers failure action', () => {
		Api.getPosts = jest.fn(() => Promise.reject(mockError)); // Reject API request

		const generator = getPostsSaga();
		const response = {};
		const mockError = new Error('some error');

		expect(generator.next().value).toEqual(call(Api.getPosts));

		expect(generator.next(mockError).value).toEqual(
			put(getPostsFailed(mockError))
		);

		expect(generator.next()).toEqual({ done: true, value: undefined });
	});
});

// checking state from reducer
test('get state from reducer', () => {
	const mockedState: AppState = {
		Main: {
			data: {
				posts: [],
				albums: [],
				photos: [],
			},
			error: null,
		},
		_persist: {
			version: -1,
			rehydrated: true,
		},
	};
	const res = getState(mockedState);
	expect(res).toBe(mockedState);
});

// // checking reducer state, saga function calling and API's SUCCESS case
// test('should fetch posts and handle them in case of SUCCESS', async () => {
// 	// Arrange
// 	const dispatchedActions: AppActions[] = []; // dispatched actions

// 	const mockedPosts: Post[] = [
// 		{ id: 1, title: 'title1' },
// 		{ id: 2, title: 'title2' },
// 	];
// 	Api.getPosts = jest.fn(() => Promise.resolve(mockedPosts)); // Resolve API request

// 	const fakeStore = {
// 		getState: () => ({ title: 'test state' }),
// 		dispatch: (action: AppActions) => dispatchedActions.push(action),
// 	};

// 	// Act
// 	await runSaga(fakeStore, getPostsSaga, {}).done;
// 	console.log(dispatchedActions);

// 	// Assert
// 	expect(Api.getPosts.mock.calls.length).toBe(1);
// 	expect(dispatchedActions).toContainEqual({
// 		type: GET_POSTS_SUCCESS,
// 		payload: mockedPosts,
// 	});
// });

// // checking reducer state, saga function calling and API's FAILURE case
// test('should handle error in case of fail', async () => {
// 	const dispatchedActions: AppActions[] = [];

// 	const mockedError = new Error('some error');
// 	Api.getPosts = jest.fn(() => Promise.reject(mockedError)); // Reject API request

// 	const fakeStore = {
// 		getState: () => ({ title: 'test state' }),
// 		dispatch: (action: AppActions) => dispatchedActions.push(action),
// 	};

// 	await runSaga(fakeStore, getPostsSaga, {}).done;
// 	console.log(dispatchedActions);

// 	expect(Api.getPosts.mock.calls.length).toBe(1);
// 	expect(dispatchedActions).toContainEqual({
// 		type: GET_POSTS_FAILED,
// 		payload: mockedError,
// 	});
// });
