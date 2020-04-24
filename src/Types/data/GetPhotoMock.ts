import { Photo } from '../Photo.interface';

export const GetPhotoMock: Photo = {
	albumId: 140,
	id: 1,
	title: 'photo title',
	url: 'https://www.test.com',
	thumbnailUrl: 'https://www.test.com',
};

export const GetPhotosMock: Photo[] = [GetPhotoMock, GetPhotoMock];
