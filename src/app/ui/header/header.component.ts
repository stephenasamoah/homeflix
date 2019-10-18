import { Component, OnInit } from '@angular/core';
import { SearchUtilService } from '../../api/_utilities/search-util.service';
import { User } from '../../api/_models/user.model';

@Component({
  selector: 'hf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private sus: SearchUtilService) {
    // this.user = {};
  }

  ngOnInit() {
  }

  sendKeywords(keywords: string): void {
    this.sus.headerSearch(keywords);
  }
}
