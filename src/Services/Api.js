const BASE_URL = "https://jsonplaceholder.typicode.com"

export default {
    async getPosts (params) {
        return fetch(`${BASE_URL + '/posts'}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => data)
    },

    async getAlbums (params) {
        return fetch(`${BASE_URL + '/albums'}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => data)
    },

    async getPhotos (params) {
        return fetch(`${BASE_URL + '/photos'}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => data)
    },
}