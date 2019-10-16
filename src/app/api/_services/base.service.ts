import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected options: RequestOptions;

  constructor(protected http: HttpClient) {
    this.options = new RequestOptions();
  }

  /**
   * Generate an absolute url to an API endpoint from a given relative url
   * @param fragment
   */
  protected Url(fragment: string): string {
    return `${ environment.MOVIES_API_URL }${ fragment }`;
  }
}

export class RequestOptions {

  constructor(public headers?: HttpHeaders, public params?: HttpParams) {
    this.headers = headers || new HttpHeaders();
    this.params = params || new HttpParams();
  }


  /**
   * Creates an instance
   */
  static create(): RequestOptions {
    return new RequestOptions();
  }

  /**
   * Returns a copy of current object
   */
  clone(): RequestOptions {
    return Object.create(this);
  }

  /**
   * Adds a single query parameter to a request
   * @param name
   * @param value
   */
  addParam(name: string, value: string): RequestOptions {
    this.params = this.params.append(name, value);

    return this;
  }


  /**
   * Sets all fetch parameters for a request option
   * @param per_page
   * @param page
   * @param ordering
   * @param filters
   */
  setFetchParams<T>(per_page?: number, page?: number, include: T[] = []): RequestOptions {
    return this;
  }
}
