import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Collection, ResponseModel } from '../_models/response.model';
import { Movie } from '../_models/movie.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  /**
   * Fetches a number of popular movies
   * @param list
   */
  Fetch(list: string): Observable<Collection<Movie>> {
    const url = this.Url(`movie/${ list }`);
    return this.http.get<ResponseModel<Collection<Movie>>>(url, this.options.clone()).pipe(map((collection) => {
      return collection.results;
    }))
  }
}
