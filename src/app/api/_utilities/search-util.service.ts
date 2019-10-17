import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchUtilService {
  private search$ = new BehaviorSubject<string>('');
  searchChanged$ = this.search$.asObservable();

  constructor() {
  }

  headerSearch(keyword: string) {
    const trimmed = keyword.trim().toLowerCase();
    this.search$.next(trimmed);
  }
}
