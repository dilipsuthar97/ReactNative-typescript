import { Post } from '../Types/Post.interface';
import { Album } from '../Types/Album.interface';
import { Photo } from '../Types/Photo.interface';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default {
	async getPosts(): Promise<Post[]> {
		return fetch(`${BASE_URL + '/posts'}`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => data);
	},

	async getAlbums(): Promise<Album[]> {
		return fetch(`${BASE_URL + '/albums'}`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => data);
	},

	async getPhotos(): Promise<Photo[]> {
		return fetch(`${BASE_URL + '/photos'}`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => data);
	},
};
