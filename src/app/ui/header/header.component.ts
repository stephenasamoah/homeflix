import { Component, OnInit } from '@angular/core';
import { SearchUtilService } from '../../api/_utilities/search-util.service';

@Component({
  selector: 'hf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sus: SearchUtilService) {
  }

  ngOnInit() {
  }

  sendKeywords(keywords: string): void {
    this.sus.headerSearch(keywords);
  }
}
