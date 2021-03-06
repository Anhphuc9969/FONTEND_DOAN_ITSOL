import { tap, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from './../../../services/rest-api.service';
import { ChangePassword } from './../../../models/changePassword';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent implements OnInit {

  changePassword: ChangePassword;
  btnDisable = false;
  url = 'http://localhost:8080/api/user/info/change-password';
  urlOtp = 'http://localhost:8080/api/user/users/info/change-password';
  constructor(private rests: RestApiService, private data: DataService,private router:Router,private http:HttpClient) {
    this.changePassword = new ChangePassword();
  }

  ngOnInit(): void {}
  validate() {
    return true;
  }
  async changePass() {
    // debugger;
    this.btnDisable = true;
      this.post(this.url, this.changePassword)
        .subscribe(
          ()=>{

          }
          // (data) => {
        //   console.log(data);
        //   // let value = data as{employeeId:string, token: string};
        //   // localStorage.getItem('token');
        //  // await this.data.getProfile();
        //   let otp = prompt("Mã OTP:");

        //   this.rests.put(this.urlOtp,{
        //     otpCode:otp,
        //     password:this.changePassword.newPassword
        //    }).then((data)=>{
        //      alert("Doi mat khau thanh cong!")
        //    }).catch((error)=>{
        //      alert("Doi mat khau that bai")
        //    })

        //   // this.router.navigate(['user/otp'])
        // }

        ,(data) => {
          console.log(data);
          // let value = data as{employeeId:string, token: string};
          // localStorage.getItem('token');
         // await this.data.getProfile();
         alert("Vui lòng check email để lấy mã OTP!")
          let otp = prompt("Mã OTP:");

          this.rests.put(this.urlOtp,{
            otpCode:otp,
            password:this.changePassword.newPassword
           }).then((data)=>{
             alert("Doi mat khau thất bại!")
           }).catch((error)=>{
             alert("Doi mat khau thanh cong")
           })

          // this.router.navigate(['user/otp'])
        })
        // .catch((error) => {
        //   this.data.error(error['error']);
        //   this.btnDisable = false;
        // });

  }
  post(link: string,body: any){
    let headers = this.rests.getHeaders();
    if(headers instanceof HttpHeaders)
    return this.http.post(link,body,{headers:headers}).pipe(tap());
    return this.http.post(link,body).pipe(tap());
  }

}
