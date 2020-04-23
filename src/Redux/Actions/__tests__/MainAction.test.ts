import React from 'react';
import renderer from 'react-test-renderer';
import { getPostsRequest, getAlbumsRequest, getPhotosRequest } from '..';
import {
	GET_POSTS_REQUEST,
	GET_ALBUMS_REQUEST,
	GET_PHOTOS_REQUEST,
} from '../../Types';

describe('MainAction.js', () => {
	describe('Action testing', () => {
		test(`Create a ${GET_POSTS_REQUEST} action`, () => {
			// You do it
			expect(getPostsRequest()).toEqual({
				type: GET_POSTS_REQUEST,
			});

			// Jest do it
			// expect(getPostsRequest()).toMatchSnapshot();
		});

		test(`Create a ${GET_ALBUMS_REQUEST} action`, () => {
			// You do it
			expect(getAlbumsRequest()).toEqual({
				type: GET_ALBUMS_REQUEST,
			});

			// Jest do it
			// expect(getAlbumsRequest()).toMatchSnapshot();
		});

		test(`Create a ${GET_PHOTOS_REQUEST} action`, () => {
			// You do it
			expect(getPhotosRequest()).toEqual({
				type: GET_PHOTOS_REQUEST,
			});

			// Jest do it
			// expect(getPhotosRequest()).toMatchSnapshot();
		});
	});
});
