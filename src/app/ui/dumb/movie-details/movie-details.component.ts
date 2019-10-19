import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../api/_models/movie.model';

@Component({
  selector: 'hf-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() isOpen: boolean;
  @Input() movie: Movie;

  constructor() {
  }

  ngOnInit() {
    console.log('Opened', this.isOpen);
  }

  close() {
    this.isOpen = false;
  }
}
