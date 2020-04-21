import {
    GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILED,
    GET_ALBUMS_REQUEST, GET_ALBUMS_SUCCESS, GET_ALBUMS_FAILED,
    GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED
} from '../Redux/Types';

import { Post } from './Post';
import { Album } from './Album';
import { Photo } from './Photo';

// post
export interface getPostsRequest {
    type: typeof GET_POSTS_REQUEST;
}

export interface getPostsSuccess {
    type: typeof GET_POSTS_SUCCESS;
    payload: Post[];
}

export interface getPostsFailed {
    type: typeof GET_POSTS_FAILED;
    payload: Error
}

// album
export interface getAlbumsRequest {
    type: typeof GET_ALBUMS_REQUEST
}

export interface getAlbumsSuccess {
    type: typeof GET_ALBUMS_SUCCESS;
    payload: Album[];
}

export interface getAlbumsFailed {
    type: typeof GET_ALBUMS_FAILED;
    payload: Error;
}

// photo
export interface getPhotosRequest {
    type: typeof GET_PHOTOS_REQUEST
}

export interface getPhotosSuccess {
    type: typeof GET_PHOTOS_SUCCESS;
    payload: Photo[];
}

export interface getPhotosFailed {
    type: typeof GET_PHOTOS_FAILED;
    payload: Error;
}

export type PostActionTypes = getPostsRequest | getPostsSuccess | getPostsFailed
export type AlbumActionTypes = getAlbumsRequest | getAlbumsSuccess | getAlbumsFailed
export type PhotoActionTypes = getPhotosRequest | getPhotosSuccess | getPhotosFailed

export type MainActions = PostActionTypes | AlbumActionTypes | PhotoActionTypes

export type AppActoins = MainActions