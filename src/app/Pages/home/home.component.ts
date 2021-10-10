import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadUsers } from '../../Store/User/users.action';
import { User } from '../../Models/User.model'; 
import { getAllUsers } from '../../Store/User/users.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  users: User[] = [];
  usersSubscription: any = new Observable();;
  loading: boolean = false;
  constructor(private store: Store) {}

  ngOnInit() {
    this.usersSubscription = this.store.pipe(select(getAllUsers))
      .subscribe((users) => {
        this.users = users;
      });
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

  getData(event: any): void {
    const { first, rows } = event; 
    this.store.dispatch(loadUsers({ first, rows }));
  }
}