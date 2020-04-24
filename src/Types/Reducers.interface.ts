import { Post } from './Post.interface';
import { Album } from './Album.interface';
import { Photo } from './Photo.interface';

export interface MainReducerState {
	error: Error | null;
	data: {
		posts?: Post[];
		albums?: Album[];
		photos?: Photo[];
	};
	getPostsSuccess?: boolean;
	getPostsFail?: boolean;
	getAlbumsSuccess?: boolean;
	getAlbumsFail?: boolean;
	getPhotosSuccess?: boolean;
	getPhotosFail?: boolean;
}
