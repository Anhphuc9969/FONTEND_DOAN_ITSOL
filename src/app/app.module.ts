import { ListJeComponent } from './components/admin/list-je/list-je.component';
import { EditJeComponent } from './components/admin/edit-je/edit-je.component';
import { AddJeComponent } from './components/admin/add-je/add-je.component';
import { FogotPassComponent } from './components/authen/fogot-pass/fogot-pass.component';
import { OtpComponent } from './components/authen/otp/otp.component';
import { EmployeeListComponent } from './components/authen/employee-list/employee-list.component';
import { ChangePasswordComponent } from './components/authen/change-password/change-password.component';
import { Interceptor } from './interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/user/header/header.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { HomeComponent } from './components/user/home/home.component';
import { LoginComponent } from './components/authen/login/login.component';
import { RegisterComponent } from './components/authen/register/register.component';
import { JobDetailComponent } from './components/user/job-detail/job-detail.component';
import { RecruitmentComponent } from './components/user/recruitment/recruitment.component';
import { ContactComponent } from './components/user/contact/contact.component';
import { ListJobComponent } from './components/user/list-job/list-job.component';
import { PersonalInfoComponent } from './components/user/personal-info/personal-info.component';

import { JobService } from './services/job.service';
import { UserComponent } from './components/user/user.component';
import { AuthenComponent } from './components/authen/authen.component';
import { AdminComponent } from './components/admin/admin.component';
import { MessageComponent } from './components/authen/message/message.component';
// import { UserAddComponent } from './components/user-add/user-add.component';
// import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from './services/rest-api.service';
import { DataService } from './services/data.service';
// import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeAddComponent } from './components/authen/employee-add/employee-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    JobDetailComponent,
    RecruitmentComponent,
    ContactComponent,
    ListJobComponent,
    PersonalInfoComponent,
    UserComponent,
    AuthenComponent,
    MessageComponent,
    EmployeeAddComponent,
    ChangePasswordComponent,
    EmployeeListComponent,
    OtpComponent,
    FogotPassComponent,
    AddJeComponent,
    EditJeComponent,
    ListJeComponent
    // UserAddComponent,
    // EmployeeComponent,
    // EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbAlertModule,
    // NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    JobService,
    RestApiService,
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
