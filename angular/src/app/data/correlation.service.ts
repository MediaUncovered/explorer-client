import {EventEmitter, Injectable, Output} from '@angular/core';

import {Observable, of, Subject} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Correlation} from './correlation';

@Injectable({
  providedIn: 'root',
})
export class CorrelationService {

  hasError: boolean = false;

  private correlationsSource = new Subject<Correlation[]>();
  correlations$ = this.correlationsSource.asObservable();

  constructor(private http: HttpClient) { }

  query(word: string): void {
    const url = environment.API_URL + "query/" + word;
    this.http.get<Correlation[]>(url).subscribe(correlations => {
        this.correlationsSource.next(correlations);
        this.hasError = false;
      },
      error => {
        console.log('UPPS');
        this.hasError = true;
      });
  }

}
