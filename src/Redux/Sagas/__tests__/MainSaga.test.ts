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
	it('success triggers success action with posts', async () => {
		Api.getPosts = jest.fn(() => Promise.resolve(GetPostsMock)); // Resolve API request

		const generator: Generator = getPostsSaga();
		const response = GetPostsMock;

		expect(generator.next().value).toEqual(call(Api.getPosts));

		expect(generator.next(response).value).toEqual(
			put(getPostsSuccess(GetPostsMock))
		);

		expect(generator.next()).toEqual({ done: true, value: undefined });
	});

	it('failure triggers failure action', async () => {
		const error = new Error('some error');
		Api.getPosts = jest.fn(() => Promise.reject(error)); // Reject API request

		const generator: Generator = getPostsSaga();
		const response = {};
		console.log('generator: ', generator);

		expect(generator.next().value).toEqual(call(Api.getPosts));

		expect(generator.throw(error).value).toEqual(put(getPostsFailed(error)));

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
