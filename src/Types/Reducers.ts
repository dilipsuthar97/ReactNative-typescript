import { Post } from "./Post";
import { Album } from "./Album";
import { Photo } from "./Photo";
import { AppState } from "../Redux/Store";
import { PersistState } from "redux-persist";

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