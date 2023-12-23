import { IImage } from './IImage';

export interface IGalleryState {
  images: IImage[];
  searchQuery: string;
  page: number;
  isLoading: boolean;
}
