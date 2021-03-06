import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenComponent } from './authen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OtpComponent } from './otp/otp.component';
import { FogotPassComponent } from './fogot-pass/fogot-pass.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
const AuthenRoutes: Routes = [
  {
    path: '',
    component: AuthenComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'employee-list',
        component: EmployeeListComponent,
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full'
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,

      },
      {
        path: 'employee-add', component:EmployeeAddComponent
      },
      {
        path: 'employee-list', component:EmployeeListComponent
      },
      {
        path: 'login', component:LoginComponent
      },

      {
        path: 'change-password', component:ChangePasswordComponent
      },
      {
        path: 'fogot-password', component:FogotPassComponent
      },
      {
        path: 'otp', component:OtpComponent
      },
      // {
    ],
  }

];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenRoutes)
  ]
})
export class AuthenModule { }
