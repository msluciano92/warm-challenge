import { UserState } from './users.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const usersFeatureSelector = createFeatureSelector<UserState>('users');

export const getAllUsers = createSelector(
  usersFeatureSelector,
  (state: UserState) => state,
);