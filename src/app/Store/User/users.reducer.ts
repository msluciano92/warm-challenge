import { createReducer, on } from '@ngrx/store';
import { userActionTypes } from './users.action';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { User } from '../../Models/User.model';

export interface UserState extends EntityState<User> {
  loading: boolean,
  pages: number,
  users: User[],
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState = adapter.getInitialState({
  users: [],
  pages: 0,
  loading: false,
});

export const userReducer = createReducer(
  initialState,
  on(userActionTypes.usersLoaded, (state, action) => {
    return adapter.setAll(action.users, state);
  }),
);

export const { selectAll, selectIds } = adapter.getSelectors();

