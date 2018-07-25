import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { RouterModule } from '../../../node_modules/@angular/router';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path : 'login', component : LoginComponent}
    ])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
  ],
  exports : [
    BsNavbarComponent
  ]
})
export class CoreModule { }
