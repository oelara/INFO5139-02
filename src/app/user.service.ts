import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL = 'http://localhost:8000/user';

  constructor(private http: HttpClient) {}

  getByEmail(eamil: string) {
    return this.http.get<User>(this.baseURL + '/getByEmail/' + eamil);
  }
}
