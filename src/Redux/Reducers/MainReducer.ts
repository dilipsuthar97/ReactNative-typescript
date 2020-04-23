import {
	GET_POSTS_SUCCESS,
	GET_POSTS_FAILED,
	GET_ALBUMS_SUCCESS,
	GET_ALBUMS_FAILED,
	GET_PHOTOS_SUCCESS,
	GET_PHOTOS_FAILED,
} from '../Types';
import { MainReducer } from '../../Types/Reducers.interface';
import { MainActions } from '../../Types/Actions.interface';

export const INITIAL_STATE: MainReducer = {
	error: null,
	data: {},
};

export default (state = INITIAL_STATE, action: MainActions): MainReducer => {
	console.log(action);
	switch (action.type) {
		case GET_POSTS_SUCCESS:
			return {
				...state,
				getPostsSuccess: true,
				data: { ...state.data, posts: action.payload },
			};
		case GET_POSTS_FAILED:
			return { ...state, getPostsFail: true, error: action.payload };

		case GET_ALBUMS_SUCCESS:
			return {
				...state,
				getAlbumsSuccess: true,
				data: { ...state.data, albums: action.payload },
			};
		case GET_ALBUMS_FAILED:
			return { ...state, getAlbumsFail: true, error: action.payload };

		case GET_PHOTOS_SUCCESS:
			return {
				...state,
				getPhotosSuccess: true,
				data: { ...state.data, photos: action.payload },
			};
		case GET_PHOTOS_FAILED:
			return { ...state, getPhotosFail: true, error: action.payload };

		default:
			return state;
	}
};
