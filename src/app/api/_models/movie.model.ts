import { BaseModel } from './base.model';

export interface Movie extends BaseModel {
  popularity?: string;
  vote_count?: string;
  video?: boolean;
  poster_path?: string;
  adult?: string;
  backdrop_path?: string;
  original_language?: string;
  original_title?: string;
  genre_ids?: number[];
  title?: string;
  vote_average?: string;
  overview?: string;
  release_date?: string;
}
