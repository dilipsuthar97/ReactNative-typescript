import Api from '../Api';
import {
	GetPostsMock,
	GetAlbumsMock,
	GetPhotosMock,
} from '../../Types/data/GetPostMock';

// test
describe('getPosts', () => {
	beforeEach(() => {
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
