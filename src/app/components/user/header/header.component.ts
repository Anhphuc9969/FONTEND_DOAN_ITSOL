import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private data: DataService, private router:Router){
    // this.data.getProfile();
      }
      logout(){
        // this.data.employee = null;
        localStorage.clear();
        this.router.navigate(['/authen/login'])
      }

  ngOnInit(): void {
  }

}
