import { FogotPassComponent } from './../components/authen/fogot-pass/fogot-pass.component';
import { OtpComponent } from './../components/authen/otp/otp.component';
import { ChangePasswordComponent } from './../components/authen/change-password/change-password.component';
import { EmployeeListComponent } from './../components/authen/employee-list/employee-list.component';
import { UserComponent } from './../components/user/user.component';
import { EmployeeAddComponent } from '../components/authen/employee-add/employee-add.component';
import { NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/user/home/home.component";
import { JobDetailComponent } from "../components/user/job-detail/job-detail.component";
import { ListJobComponent } from "../components/user/list-job/list-job.component";
import { LoginComponent } from "../components/authen/login/login.component";
import { PersonalInfoComponent } from "../components/user/personal-info/personal-info.component";
import { RecruitmentComponent } from "../components/user/recruitment/recruitment.component";
import { RegisterComponent } from "../components/authen/register/register.component";
const routes: Routes = [
    {
        path: 'user',
        loadChildren: () => import("src/app/components/user/user.module").then((m) => m.UserModule)
    },
    {
        path: 'authen',
        loadChildren: () => import("src/app/components/authen/authen.module").then((m) => m.AuthenModule)
    },
    {
      path: '',
      loadChildren: () => import("src/app/components/user/user.module").then(m => m.UserModule)
  },
  {
      path: 'authen',
      loadChildren: () => import("src/app/components/authen/authen.module").then((m) => m.AuthenModule)
  },
  {
      path: 'admin',
      loadChildren: () => import('src/app/components/admin/admin.module').then(m => m.AdminModule),
      // canActivate:[GuardsGuard],
  },
    // {
    //   path: 'employee-add', component:EmployeeAddComponent
    // },
    // {
    //   path: 'employee-list', component:EmployeeListComponent
    // },
    // {
    //   path: 'login', component:LoginComponent
    // },

    // {
    //   path: 'change-password', component:ChangePasswordComponent
    // },
    // {
    //   path: 'fogot-password', component:FogotPassComponent
    // },
    // {
    //   path: 'otp', component:OtpComponent
    // },
    // // {
    //   path: '', component:HomeComponent
    // }

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
