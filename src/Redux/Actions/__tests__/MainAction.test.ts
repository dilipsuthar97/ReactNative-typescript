import React from 'react';
import renderer from 'react-test-renderer';
import { getPostsRequest, getPostsSuccess, getPostsFailed } from '..';
import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAILED,
} from '../../Types';
import { GetPostsMock } from '../../../Types/data/GetPostMock';

// tests
describe('getPosts actions', () => {
	it('creates GetPostsRequest', () => {
		const action = getPostsRequest();

		expect(action).toEqual({
			type: GET_POSTS_REQUEST,
		});
	});

	it('creates GetPostsSuccess', () => {
		const action = getPostsSuccess(GetPostsMock);

		expect(action).toEqual({
			type: GET_POSTS_SUCCESS,
			payload: GetPostsMock,
		});
	});

	it('creates GetPostsFailed', () => {
		const error = new Error('some error');
		const action = getPostsFailed(error);

		expect(action).toEqual({
			type: GET_POSTS_FAILED,
			payload: error,
		});
	});
});

// and so on for albums and photos...
