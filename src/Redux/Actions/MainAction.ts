import {
    GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILED,
    GET_ALBUMS_REQUEST, GET_ALBUMS_SUCCESS, GET_ALBUMS_FAILED,
    GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED,
} from '../Types'

import { AppActoins } from '../../Types/Actions';

import { Post } from '../../Types/Post';
import { Album } from '../../Types/Album';
import { Photo } from '../../Types/Photo';

export const getPostsRequest = (): AppActoins => {
    console.log('params in action -----------------------------------')
    return {
        type: GET_POSTS_REQUEST,
    }
}

export const getPostsSuccess = (posts: Post[]): AppActoins => ({
    type: GET_POSTS_SUCCESS,
    payload: posts
})

export const getPostsFailed = (err: Error): AppActoins => ({
    type: GET_POSTS_FAILED,
    payload: err
})

export const getAlbumsRequest = (): AppActoins => {
    console.log('params in action -----------------------------------')
    return {
        type: GET_ALBUMS_REQUEST,
    }
}

export const getAlbumsSuccess = (albums: Album[]): AppActoins => ({
    type: GET_ALBUMS_SUCCESS,
    payload: albums
})

export const getAlbumsFailed = (err: Error): AppActoins => ({
    type: GET_ALBUMS_FAILED,
    payload: err
})

export const getPhotosRequest = (): AppActoins => {
    console.log('params in action -----------------------------------')
    return {
        type: GET_PHOTOS_REQUEST,
    }
}

export const getPhotosSuccess = (photos: Photo[]): AppActoins => ({
    type: GET_PHOTOS_SUCCESS,
    payload: photos
})

export const getPhotosFailed = (err: Error): AppActoins => ({
    type: GET_PHOTOS_FAILED,
    payload: err
})

