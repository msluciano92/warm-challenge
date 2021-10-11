import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../Models/User.model';

@Component({
    selector: 'users-table',
    templateUrl: './users-table.component.html',
})
export class UsersTableComponent {
    @Input()
    users: User[] = [];

    @Input()
    total: number = 0;

    @Input()
    loading: boolean = true;

    @Output() 
    onLazyLoad = new EventEmitter<any>();

    getData(event: any): void {
        this.onLazyLoad.emit(event);
    }
}