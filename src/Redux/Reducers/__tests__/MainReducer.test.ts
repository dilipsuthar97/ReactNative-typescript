import { GetPostsMock } from '../../../Types/data/GetPostMock';
import MainReducer, { INITIAL_STATE } from '../MainReducer';
import { getPostsSuccess, getPostsFailed } from '../../Actions';
import { GET_POSTS_SUCCESS, GET_POSTS_FAILED } from '../../Types';

describe('MainReducer action type responses for', () => {
	// test reducer with success case
	describe(`case ${GET_POSTS_SUCCESS}`, () => {
		const data = GetPostsMock;
		const action = getPostsSuccess(data);
		const newState = MainReducer(INITIAL_STATE, action);

		it('fetched posts', () => {
			expect(newState.data.posts).toEqual(GetPostsMock);
		});

		it('is fetching done with success', () => {
			expect(newState.getPostsSuccess).toBe(true);
		});
	});

	// test reducer with failure case
	describe(`case ${GET_POSTS_FAILED}`, () => {
		const error = new Error('some error');
		const action = getPostsFailed(error);
		const newState = MainReducer(INITIAL_STATE, action);

		it('not fetched posts', () => {
			expect(newState.data.posts).toEqual(undefined);
		});

		it('should receive error', () => {
			expect(newState.error).toEqual(error);
			expect(newState.error).not.toEqual(null);
		});

		it('is fetching done with fail', () => {
			expect(newState.getPostsFail).toBe(true);
		});
	});
});

// and so on for albums and photos...
