import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseURL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getUsers(page: string, pageSize: string): Observable<ReadonlyArray<any>> {
    const url = `${this.baseURL}/users?page=${page}&size=${pageSize}`;
    return this.http.get<ReadonlyArray<any>>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
