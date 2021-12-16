import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddJeComponent } from './add-je/add-je.component';
import { EditJeComponent } from './edit-je/edit-je.component';
import { ListJeComponent } from './list-je/list-je.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderAdComponent } from './header-ad/header-ad.component';
import { HomeAdComponent } from './home-ad/home-ad.component';
import { FooterAdComponent } from './footer-ad/footer-ad.component';

const Adminroutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path:'',
        component: HomeAdComponent,
        pathMatch:'full'
      },
      // {
      //   path:'job',
      //   component: ListJobAdComponent,
      //   pathMatch:'full'
      // },
      // {
      //   path:'job/create',
      //   component: CreateJobComponent,
      //   pathMatch:'full'
      // },
      {
        path:'user',
        component: ListJeComponent,

        pathMatch:'full'
      },
      {
        path:'addJE',
        component: AddJeComponent,

        pathMatch:'full'
      },
      {
        path:'editJE/:id',
        component: EditJeComponent,

        pathMatch:'full'
      },
      // {
      //   path:'user/create',
      //   component: CreateUserComponent,
      //   pathMatch:'full'
      // },
      // {
      //   path:'jobregister',
      //   component: ListJobregisterComponent,
      //   pathMatch:'full'
      // },
      // {
      //   path:'company',
      //   component: CompanyAdComponent,
      //   pathMatch:'full'
      // },
      // {
      //   path:'company/create',
      //   component: CreateCompanyComponent,
      //   pathMatch:'full'
      // },
      // {
      //   path:'academic/edit',
      //   component: EditAcademiclevelComponent,
      //   pathMatch:'full'
      // },
    ]
  },
]

@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
            HeaderAdComponent,
            HomeAdComponent,
            FooterAdComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Adminroutes)
  ]
})
export class AdminModule { }
