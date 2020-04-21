import { put, call, takeEvery, select } from 'redux-saga/effects';
import Api from '../../Services/Api';

import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILED,

    GET_ALBUMS_REQUEST,
    GET_ALBUMS_SUCCESS,
    GET_ALBUMS_FAILED,

    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAILED
} from '../Types';

// it'll return state from reducer
export const getState = state => state;

export const getPostsSaga = function* getPostsSaga({ params }) {
    const state = yield select(getState)    // get current state from reducer
    console.log('Reducer state: ', state)

    try {
        console.log('---------------SAGA CALLING AVAILABILITY', params)
        const response = yield call(Api.getPosts, params)
        console.log('getPostsSaga: response >>>>>> ', response);

        yield put({ type: GET_POSTS_SUCCESS, payload: response })

    } catch (err) {
        console.warn('--------------ERROR', err)
        yield put({ type: GET_POSTS_FAILED, payload: err })
    }
}

export const getAlbumsSaga = function* getAlbumsSaga({ params }) {
    try {
        console.log('---------------SAGA CALLING AVAILABILITY', params)
        const response = yield call(Api.getAlbums, params)
        console.log('getPostsSaga: response >>>>>> ', response);

        yield put({ type: GET_ALBUMS_SUCCESS, payload: response })

    } catch (err) {
        console.warn('--------------ERROR', err)
        yield put({ type: GET_ALBUMS_FAILED, payload: err })
    }
}

export const getPhotosSaga = function* getPhotosSaga({ params }) {
    try {
        console.log('---------------SAGA CALLING AVAILABILITY', params)
        const response = yield call(Api.getPhotos, params)
        console.log('getPostsSaga: response >>>>>> ', response);

        yield put({ type: GET_PHOTOS_SUCCESS, payload: response })

    } catch (err) {
        console.warn('--------------ERROR', err)
        yield put({ type: GET_PHOTOS_FAILED, payload: err })
    }
}

export function* mainSaga() {
    yield takeEvery(GET_POSTS_REQUEST, getPostsSaga);
    yield takeEvery(GET_ALBUMS_REQUEST, getAlbumsSaga);
    yield takeEvery(GET_PHOTOS_REQUEST, getPhotosSaga);
}

export default mainSaga;