import { createReducer, on } from '@ngrx/store';
import { userActionTypes } from './users.action';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { User } from '../../Models/User.model';

export interface UserState extends EntityState<User> {
  users: User[],
  total: number
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState = adapter.getInitialState();

export const userReducer = createReducer(
  initialState,
  on(userActionTypes.usersLoaded, (state, action) => {
    return { ...state, ...action };
  }),
);
