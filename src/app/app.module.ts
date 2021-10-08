import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component'
import { UsersService } from './Services/Users.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './Store/reducers';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';

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
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
