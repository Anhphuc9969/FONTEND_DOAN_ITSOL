import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { EmployeeService } from './../../../services/employee.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Employee } from './../../../models/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-je',
  templateUrl: './add-je.component.html',
  styleUrls: ['./add-je.component.css']
})
export class AddJeComponent implements OnInit {

  employee: Employee;
  addForm!: FormGroup;
  btnDisable = false;
  url = 'http://localhost:8080/api/admin/signupje';
  constructor(
    private rest: EmployeeService,
    private data: DataService,
    private http: HttpClient,
    private Fb: FormBuilder
  ) {

  }
  ngOnInit() {
    this.initForm();
  }
  public initForm() {
    this.addForm = this.Fb.group({
      fullName: new FormControl(''),
      email: new FormControl(''),
      userName: new FormControl(''),
      password: new FormControl(''),
      phoneNumber: new FormControl(''),
      homeTown: new FormControl(''),
      gender: new FormControl(''),
      birthDay: new FormControl(''),
    });
  }
  // get f(){
  //   return this.exform.controls;
  // }
  saveJE() {
    debugger;
    this.btnDisable = true;
    console.log(this.addForm.value);

    this.rest.addJE(this.addForm.value).subscribe((data) => {
      this.data.success('Employee is save');
      this.btnDisable = false;
      console.log('đăng kí thành công! Vui lòng check mail và xác nhận.');
    });
  }



  // validate() {
  //   return true;
  // }
  post(link: string, body: any) {
    // let headers = this.getHeaders();
    // if(headers instanceof HttpHeaders)
    // return this.http.post(link,body,{headers:headers}).toPromise();
    return this.http.post(link, body).toPromise();
  }

}
