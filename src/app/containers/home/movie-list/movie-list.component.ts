import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../../api/_services/movie.service';
import { Collection, createCollection } from '../../../api/_models/response.model';
import { Movie } from '../../../api/_models/movie.model';
import { Subject } from 'rxjs';
import { SearchUtilService } from '../../../api/_utilities/search-util.service';
import { SubSink } from 'subsink';
import { Genre } from '../../../api/_models/genre.model';
import { GenreService } from '../../../api/_services/genre.service';

@Component({
  selector: 'hf-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  private subsink = new SubSink();
  private popular = createCollection<Movie>();
  private popularSubject$ = new Subject<Collection<Movie>>();
  popular$ = this.popularSubject$.asObservable();

  private imageUrl = '';
  private imageUrlSubject$ = new Subject<string>();
  image$ = this.imageUrlSubject$.asObservable();

  searchKey: string;
  mutated: Movie[] = [];

  isOpen = false;
  selectedMovie: Movie = {};

  genre: Genre[] = [];
  selectedGenre: Genre[] = [];

  constructor(
    private ms: MovieService,
    private sus: SearchUtilService,
    private gs: GenreService
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
        return movie.title.toLowerCase().includes(this.searchKey);
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
      this.popular = list;
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

  movieTracker(index: number, movie: Movie): number {
    return movie.id;
  }

  detailsHandler(movie: Movie) {
    movie.genre_ids.forEach((id => {
      const mappedGenre: Genre = this.genre.find(g => g.id === id);
      this.selectedGenre.push(mappedGenre);
    }));

    this.isOpen = true;
    this.selectedMovie = movie;
  }
}
