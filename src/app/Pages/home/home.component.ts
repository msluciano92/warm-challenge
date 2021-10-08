import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersService } from '../../Services/Users.service';

// Import interfaces

// Import methods (if it's needed)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  users: any = [];
  loading: boolean = true;
  val: any;
  constructor(private store: Store, private usersService: UsersService) {}

  getData(event: any): void {
    console.log(event);
    const { first, rows } = event; 
    this.usersService.getUsers(first, rows)
      .subscribe((users: any) => {
        this.users = users;
        this.loading = false;
      });
  }
}