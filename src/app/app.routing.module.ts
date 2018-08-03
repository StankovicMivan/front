import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { IgracComponent } from './igrac/igrac.component';
import { KlubComponent } from './klub/klub.component';
import { AddUserComponent } from './user/add-user.component';
import { EditIgracComponent } from './igrac/edit-igrac.component';


const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'klubovi', component: KlubComponent },
  { path: 'igraci/:id', component: EditIgracComponent },
  { path: 'igraci', component: IgracComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
