import { User } from './User.model';

export interface UsersBackend {
    users: User[],
    total: number,
}
