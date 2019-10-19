import { Component, OnInit } from '@angular/core';
import { Layouts } from './api/_enums/enum.common';
import { Router, RoutesRecognized } from '@angular/router';


@Component({
  selector: 'hf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Layouts = Layouts;
  currLayout: Layouts;
  title = 'Homeflix';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.currLayout = data.state.root.firstChild.data.layout;
      }
    });
  }
}
