import { Post } from './Post.interface';
import { Album } from './Album.interface';
import { Photo } from './Photo.interface';
import { AppState } from '../Redux/Store';
import { PersistState } from 'redux-persist';

export interface MainReducer {
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
