import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component'

import { userReducer } from './Store/User/users.reducer';
import { UsersEffects } from './Store/User/users.effect';
import { UsersService } from './Services/Users.service';
import { UsersTableComponent } from './Components/users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    BadgeModule,
    HttpClientModule,
    StoreModule.forRoot({
      users: userReducer,
    }),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
