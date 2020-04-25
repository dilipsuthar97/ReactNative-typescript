import Api from '../Api';
import { GetPostsMock } from '../../Types/data/GetPostMock';
import { GetAlbumsMock } from '../../Types/data/GetAlbumMock';
import { GetPhotosMock } from '../../Types/data/GetPhotoMock';

// test
describe('getPosts', () => {
	beforeEach(() => {
		// mocking api requests for success
		Api.getPosts = jest.fn(() => Promise.resolve(GetPostsMock));
		Api.getAlbums = jest.fn(() => Promise.resolve(GetAlbumsMock));
		Api.getPhotos = jest.fn(() => Promise.resolve(GetPhotosMock));
	});

	it('getPosts success should return as expected', async () => {
		const response = await Api.getPosts();
		expect(response).toEqual(GetPostsMock);
	});

	it('getAlbums success should return as expected', async () => {
		const response = await Api.getAlbums();
		expect(response).toEqual(GetAlbumsMock);
	});

	it('getPhotos success should return as expected', async () => {
		const response = await Api.getPhotos();
		expect(response).toEqual(GetPhotosMock);
	});
});
