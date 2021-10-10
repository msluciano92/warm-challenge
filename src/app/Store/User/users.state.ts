import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../Models/User.model';

export interface UsersState extends EntityState<User> {
    users: User[],
}

export const usersAdapter = createEntityAdapter<User>();

export const initialState: UsersState = usersAdapter.getInitialState({
    users: []
});
