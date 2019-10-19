import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../../../api/_services/favourites.service';
import { Movie } from '../../../api/_models/movie.model';
import { Selectable } from '../../../api/_utilities/types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchUtilService } from '../../../api/_utilities/search-util.service';

@Component({
  selector: 'hf-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.css']
})
export class FavouritesListComponent implements OnInit {
  favourites: Selectable<Movie>[];

  constructor(
    private fvs: FavouritesService,
    private sus: SearchUtilService
  ) {
  }

  ngOnInit() {
    this.getFavourites().subscribe(el => console.log(el));

    // this.sus.searchChanged$.subscribe(e => console.log(e));
  }

  getFavourites(): Observable<Selectable<Movie>[]> {
    this.favourites = [];
    return this.fvs.favouritesChanged$.pipe(map((changed) => {
      if (changed.length) {
        return this.favourites = changed;
      }
      return this.favourites;
    }));
  }
}

