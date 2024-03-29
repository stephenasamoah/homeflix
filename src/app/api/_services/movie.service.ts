import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Collection } from '../_models/response.model';
import { Movie } from '../_models/movie.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  /**
   * Fetches a number of popular movies
   * @param list
   */
  Fetch(list: string): Observable<Collection<Movie>> {
    const url = this.Url(`movie/${ list }`);
    return this.http.get<Collection<Movie>>(url, this.options.clone()).pipe(map((response) => {
      //:: TODO chain image response to this movies request
      return response;
    }));
  }

  GetImagePath(movie: Movie) {
    return `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
  }
}
