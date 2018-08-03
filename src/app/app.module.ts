import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { IgracComponent } from './igrac/igrac.component';
import { KlubComponent } from './klub/klub.component';
import {AddUserComponent} from './user/add-user.component';
import {EditIgracComponent} from './igrac/edit-igrac.component';


import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {IgracService} from './igrac/igrac.service';
import {KlubService} from './klub/klub.service';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    IgracComponent,
    KlubComponent,
    AddUserComponent,
    EditIgracComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, IgracService,KlubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
