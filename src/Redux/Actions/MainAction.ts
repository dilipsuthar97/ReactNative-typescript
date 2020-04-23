import {
	GET_POSTS_REQUEST,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAILED,
	GET_ALBUMS_REQUEST,
	GET_ALBUMS_SUCCESS,
	GET_ALBUMS_FAILED,
	GET_PHOTOS_REQUEST,
	GET_PHOTOS_SUCCESS,
	GET_PHOTOS_FAILED,
} from '../Types';

import { AppActions } from '../../Types/Actions.interface';

import { Post } from '../../Types/Post.interface';
import { Album } from '../../Types/Album.interface';
import { Photo } from '../../Types/Photo.interface';

export const getPostsRequest = (): AppActions => {
	console.log('params in action -----------------------------------');
	return {
		type: GET_POSTS_REQUEST,
	};
};

export const getPostsSuccess = (posts: Post[]): AppActions => ({
	type: GET_POSTS_SUCCESS,
	payload: posts,
});

export const getPostsFailed = (err: Error): AppActions => ({
	type: GET_POSTS_FAILED,
	payload: err,
});

export const getAlbumsRequest = (): AppActions => {
	console.log('params in action -----------------------------------');
	return {
		type: GET_ALBUMS_REQUEST,
	};
};

export const getAlbumsSuccess = (albums: Album[]): AppActions => ({
	type: GET_ALBUMS_SUCCESS,
	payload: albums,
});

export const getAlbumsFailed = (err: Error): AppActions => ({
	type: GET_ALBUMS_FAILED,
	payload: err,
});

export const getPhotosRequest = (): AppActions => {
	console.log('params in action -----------------------------------');
	return {
		type: GET_PHOTOS_REQUEST,
	};
};

export const getPhotosSuccess = (photos: Photo[]): AppActions => ({
	type: GET_PHOTOS_SUCCESS,
	payload: photos,
});

export const getPhotosFailed = (err: Error): AppActions => ({
	type: GET_PHOTOS_FAILED,
	payload: err,
});
