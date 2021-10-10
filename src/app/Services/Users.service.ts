import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { User } from '../Models/User.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseURL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getUsers(page: number, pageSize: number): Observable<User[]> {
    const url = `${this.baseURL}/users?page=${page}&size=${pageSize}`;
    return this.http.get<User[]>(url);
  }
}
