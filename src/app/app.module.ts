import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component'
import { UsersService } from './Services/Users.service';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { UsersEffects } from './Store/User/users.effect';
import { EffectsModule } from '@ngrx/effects';

import { TableModule } from 'primeng/table';
import { userReducer } from './Store/User/users.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
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
