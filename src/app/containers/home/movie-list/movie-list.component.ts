import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../../api/_services/movie.service';
import { Collection, createCollection } from '../../../api/_models/response.model';
import { Movie } from '../../../api/_models/movie.model';
import { Subject } from 'rxjs';
import { SearchUtilService } from '../../../api/_utilities/search-util.service';
import { SubSink } from 'subsink';
import { Genre } from '../../../api/_models/genre.model';
import { GenreService } from '../../../api/_services/genre.service';
import { FavouritesService } from '../../../api/_services/favourites.service';
import { Selectable } from '../../../api/_utilities/types';

@Component({
  selector: 'hf-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  private subsink = new SubSink();
  private popular = createCollection<Selectable<Movie>>();
  private popularSubject$ = new Subject<Collection<Selectable<Movie>>>();
  popular$ = this.popularSubject$.asObservable();


  searchKey: string;
  mutated: Selectable<Movie>[] = [];

  isOpen = false;
  clickedMovie: Selectable<Movie>;

  genre: Genre[] = [];
  selectedGenre: Genre[] = [];

  faveProgress: boolean;

  constructor(
    private ms: MovieService,
    private sus: SearchUtilService,
    private gs: GenreService,
    private fvs: FavouritesService
  ) {
  }

  ngOnInit() {
    this.getGenre();
    this.getPopular();

    /**
     * Monitor search keywords
     */
    this.subsink.sink = this.sus.searchChanged$.subscribe(keyword => {
      this.searchKey = keyword;
      if (!keyword) {
        return this.mutated = this.popular.results;
      }

      this.mutated = this.popular.results.filter((movie) => {
        return movie.item.title.toLowerCase().includes(this.searchKey);
      });
    });
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

  /**
   * Get most popular movies
   */
  private getPopular() {
    this.subsink.sink = this.ms.Fetch('popular').subscribe((list) => {
      list.results.map((item => {
        // Get image urls
        this.getImagePath(item);
      }));

      this.popular.results = list.results.map((item) => ({ item }));

      this.mutated = this.popular.results;
      this.popularSubject$.next(this.popular);
    });
  }

  private getGenre() {
    if (!this.genre.length) {
      this.subsink.sink = this.gs.Fetch().subscribe(g => {
        this.genre = g;
      });
    }
  }

  getImagePath(movie: Movie) {
    return (`https://image.tmdb.org/t/p/w342/${ movie.poster_path }`);
  }

  movieTracker(index: number, movie: Selectable<Movie>): number {
    return movie.item.id;
  }

  detailsHandler(movie: Selectable<Movie>) {
    this.selectedGenre = [];

    movie.item.genre_ids.forEach((id => {
      const mappedGenre: Genre = this.genre.find(g => g.id === id);
      this.selectedGenre.push(mappedGenre);
    }));

    this.isOpen = true;
    this.clickedMovie = movie;
  }

  /**
   * Add to favourites
   */
  addToFaves(movie: Selectable<Movie>): void {
    this.faveProgress = true;
    setTimeout(() => {
      movie.selected = !movie.selected;

      this.fvs.setFavourites(movie);
      this.faveProgress = false;
    }, 1200);
  }
}
