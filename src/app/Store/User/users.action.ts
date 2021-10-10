import { User } from '../../Models/User.model';
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction(
  '[Users List] Load Users via Service',
  props<{first: number, rows: number}>()
);

export const usersLoaded = createAction(
  '[Users Effect] Users Loaded Successfully',
  props<{users: User[]}>()
);

export const userActionTypes = {
  loadUsers,
  usersLoaded,
};
