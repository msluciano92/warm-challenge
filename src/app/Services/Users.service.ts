import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersBackend } from '../Models/UsersBackend.model';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private baseURL = 'http://localhost:3000';
    constructor(private http: HttpClient) {}

    getUsers(first: number, rows: number): Observable<UsersBackend> {
        const url = `${this.baseURL}/users?first=${first}&rows=${rows}`;
        return this.http.get<UsersBackend>(url);
    }
}
