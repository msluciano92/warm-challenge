import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadUsers } from '../../Store/User/users.action';
import { User } from '../../Models/User.model'; 
import { getAllUsers } from '../../Store/User/users.selector';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    users: User[] = [];
    usersSubscription: any = new Observable();
    loading: boolean = true;
    total: number = 0;
    
    constructor(private store: Store) {}

    ngOnInit() {
        this.usersSubscription = this.store.pipe(select(getAllUsers))
            .subscribe((users) => {
              this.users = users.users;
              this.total = users.total;
              this.loading = false;
            });
    }

    ngOnDestroy() {
      this.usersSubscription.unsubscribe();
    }

    getData(event: any): void {
      const { first, rows } = event;
      this.loading = true; 
      this.store.dispatch(loadUsers({ first, rows }));
    }
}
