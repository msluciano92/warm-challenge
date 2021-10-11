import { UsersService } from '../../Services/Users.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userActionTypes } from './users.action';
import { User } from '../../Models/User.model';
import { UsersBackend } from '../../Models/UsersBackend.model';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
      ofType(userActionTypes.loadUsers),
      exhaustMap((params) => {
          const { first, rows } = params;
          return this.usersService.getUsers(first, rows).pipe(
            map((response: UsersBackend) => (userActionTypes.usersLoaded({ ...response }))),
      )}),
    )
  );

  constructor(private usersService: UsersService, private actions$: Actions, private router: Router) {}
}
