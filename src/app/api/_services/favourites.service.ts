import { Injectable } from '@angular/core';
import { Movie } from '../_models/movie.model';
import { BehaviorSubject } from 'rxjs';
import { Selectable } from '../_utilities/types';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  latestFavourites$: Selectable<Movie>[] = [];
  private favouritesSubject$ = new BehaviorSubject<Selectable<Movie>[]>(this.latestFavourites$);
  private favouritesChanged$ = this.favouritesSubject$.asObservable();

  constructor() {
  }

  setFavourites(movie: Selectable<Movie>) {
    this.latestFavourites$.push(movie);
    this.favouritesSubject$.next(this.latestFavourites$);
    console.log(this.latestFavourites$);
  }
}
