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
} from '../Redux/Types';

import { Post } from './Post.interface';
import { Album } from './Album.interface';
import { Photo } from './Photo.interface';

// post
export interface GetPostsRequest {
	type: typeof GET_POSTS_REQUEST;
}

export interface GetPostsSuccess {
	type: typeof GET_POSTS_SUCCESS;
	payload: Post[];
}

export interface GetPostsFailed {
	type: typeof GET_POSTS_FAILED;
	payload: Error;
}

// album
export interface GetAlbumsRequest {
	type: typeof GET_ALBUMS_REQUEST;
}

export interface GetAlbumsSuccess {
	type: typeof GET_ALBUMS_SUCCESS;
	payload: Album[];
}

export interface GetAlbumsFailed {
	type: typeof GET_ALBUMS_FAILED;
	payload: Error;
}

// photo
export interface GetPhotosRequest {
	type: typeof GET_PHOTOS_REQUEST;
}

export interface GetPhotosSuccess {
	type: typeof GET_PHOTOS_SUCCESS;
	payload: Photo[];
}

export interface GetPhotosFailed {
	type: typeof GET_PHOTOS_FAILED;
	payload: Error;
}

export type PostActionTypes =
	| GetPostsRequest
	| GetPostsSuccess
	| GetPostsFailed;
export type AlbumActionTypes =
	| GetAlbumsRequest
	| GetAlbumsSuccess
	| GetAlbumsFailed;
export type PhotoActionTypes =
	| GetPhotosRequest
	| GetPhotosSuccess
	| GetPhotosFailed;

export type MainActions = PostActionTypes | AlbumActionTypes | PhotoActionTypes;

export type AppActions = MainActions;
