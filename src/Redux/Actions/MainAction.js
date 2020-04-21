import {
    GET_POSTS_REQUEST,
    GET_ALBUMS_REQUEST,
    GET_PHOTOS_REQUEST
} from '../Types'

export const getPostsRequest = (params) => {
    console.log('params in action -----------------------------------', params)
    return {
        type: GET_POSTS_REQUEST,
        params
    }
}

export const getAlbumsRequest = (params) => {
    console.log('params in action -----------------------------------', params)
    return {
        type: GET_ALBUMS_REQUEST,
        params
    }
}

export const getPhotosRequest = (params) => {
    console.log('params in action -----------------------------------', params)
    return {
        type: GET_PHOTOS_REQUEST,
        params
    }
}

