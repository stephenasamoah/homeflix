import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Genre } from '../_models/genre.model';
import { ResponseModel } from '../_models/response.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http);
  }


  Fetch(): Observable<Genre[]> {
    const url = this.Url(`genre/movie/list`);
    return this.http.get<GenreResponseData>(url, this.options.clone()).pipe(map((response) => response.genres));
  }
}

interface GenreResponseData extends ResponseModel {
  genres: Genre[]
}
