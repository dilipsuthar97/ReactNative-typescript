import { Post } from '../Post.interface';

export const GetPostMock: Post = {
	userId: 100,
	id: 10,
	title: 'mock title',
	body: 'mock body',
};

export const GetPostsMock: Post[] = [GetPostMock, GetPostMock];
