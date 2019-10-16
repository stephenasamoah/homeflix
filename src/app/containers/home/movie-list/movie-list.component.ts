import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../../api/_services/movie.service';
import { Collection, createCollection } from '../../../api/_models/response.model';
import { Movie } from '../../../api/_models/movie.model';
import { Subject, Subscription } from 'rxjs';

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

  constructor(private ms: MovieService) {
  }

  ngOnInit() {
    console.log(this.popular);
    this.subscription = this.ms.Fetch('popular').subscribe((list: Collection<Movie>) => {
      this.popular = list;
      this.popularSubject$.next(this.popular);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
