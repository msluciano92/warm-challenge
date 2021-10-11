import { UserState } from './users.reducer';
import { User } from '../../Models/User.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const usersFeatureSelector = createFeatureSelector<UserState>('users');

export const getAllUsers = createSelector(
  usersFeatureSelector,
  (state: UserState) => state,
);