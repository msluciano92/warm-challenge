import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'warm-challenge';

  constructor(private store: Store) {}

  ngOnInit(): void {
    // Should request data list here
  }
}
