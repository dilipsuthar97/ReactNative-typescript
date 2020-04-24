import { put, call, takeEvery, select, all } from 'redux-saga/effects';
import Api from '../../Services/Api';

import {
	GET_POSTS_REQUEST,
	GET_ALBUMS_REQUEST,
	GET_PHOTOS_REQUEST,
} from '../Types';

import {
	getPostsSuccess,
	getPostsFailed,
	getAlbumsSuccess,
	getAlbumsFailed,
	getPhotosSuccess,
	getPhotosFailed,
} from '../Actions';
import { AppState } from '../Store';
import { Post } from 'src/Types/Post.interface';

// it'll return root state from reducer
export const getState = (state: AppState): AppState => state;

export const getPostsSaga = function* getPostsSaga(): any {
	// const state = yield select(getState); // get current state from reducer
	// console.log('Reducer state: ', state);

	try {
		console.log('---------------SAGA CALLING AVAILABILITY');
		const response = yield call(Api.getPosts);
		console.log('getPostsSaga: response >>>>>> ', response);

		yield put(getPostsSuccess(response));
	} catch (err) {
		console.warn('--------------ERROR', err);
		yield put(getPostsFailed(err));
	}
};

export const getAlbumsSaga = function* getAlbumsSaga(): any {
	try {
		console.log('---------------SAGA CALLING AVAILABILITY');
		const response = yield call(Api.getAlbums);
		console.log('getPostsSaga: response >>>>>> ', response);

		yield put(getAlbumsSuccess(response));
	} catch (err) {
		console.warn('--------------ERROR', err);
		yield put(getAlbumsFailed(err));
	}
};

export const getPhotosSaga = function* getPhotosSaga(): any {
	try {
		console.log('---------------SAGA CALLING AVAILABILITY');
		const response = yield call(Api.getPhotos);
		console.log('getPostsSaga: response >>>>>> ', response);

		yield put(getPhotosSuccess(response));
	} catch (err) {
		console.warn('--------------ERROR', err);
		yield put(getPhotosFailed(err));
	}
};

export function* mainSaga() {
	yield all([
		takeEvery(GET_POSTS_REQUEST, getPostsSaga),
		takeEvery(GET_ALBUMS_REQUEST, getAlbumsSaga),
		takeEvery(GET_PHOTOS_REQUEST, getPhotosSaga),
	]);
}

export default mainSaga;
