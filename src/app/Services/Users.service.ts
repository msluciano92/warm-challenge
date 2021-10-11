import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { User } from '../Models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getUsers(first: number, rows: number): Observable<{ pages: number, users: User[] }> {
    const url = `${this.baseURL}/users?first=${first}&rows=${rows}`;
    return this.http.get<{ pages: number, users: User[] }>(url);
  }
}
