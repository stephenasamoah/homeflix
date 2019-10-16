import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../../api/_services/movie.service';
import { Collection, createCollection } from '../../../api/_models/response.model';
import { Movie } from '../../../api/_models/movie.model';
import { Observable, of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'hf-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private popular = createCollection<Movie>();
  private popularSubject$ = new Subject<Collection<Movie>>();
  popular$ = this.popularSubject$.asObservable();

  private imageUrl = '';
  private imageUrlSubject$ = new Subject<string>();
  image$ = this.imageUrlSubject$.asObservable();

  constructor(private ms: MovieService) {
  }

  ngOnInit() {
    this.subscription = this.ms.Fetch('popular').subscribe((list) => {
      list.results.map((item => {
        // Get image urls
        this.getImagePath(item);
      }));
      this.popular = list;
      this.popularSubject$.next(this.popular);

    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getImagePath(movie: Movie): Observable<string> {
    return of(`https://image.tmdb.org/t/p/w342/${ movie.poster_path }`);
  }

}
