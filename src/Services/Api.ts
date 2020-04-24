import { Post } from '../Types/Post.interface';
import { Album } from '../Types/Album.interface';
import { Photo } from '../Types/Photo.interface';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default {
	async getPosts(): Promise<any> {
		return fetch(`${BASE_URL + '/posts'}`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => data);
	},

	async getAlbums(): Promise<any> {
		return fetch(`${BASE_URL + '/albums'}`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => data);
	},

	async getPhotos(): Promise<any> {
		return fetch(`${BASE_URL + '/photos'}`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => data);
	},
};
