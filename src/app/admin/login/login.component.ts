import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router:Router,
    private http:HttpClient
  ){}

  // goToAdminPage(pageName:String):void{
  //     this.router.navigate(['/adminHome'])
  // }

  // =============LOGIN VALIDATION=============

  public branchEmail:any;

  public password:any;

  public loginBranch:any={};

  public loginValidation(pageName:String):void{
    this.http.get(` http://localhost:8080/branch/search_by_email/${this.branchEmail}`).subscribe(data=>{
        this.loginBranch=data;
        if (this.password === this.loginBranch.password) {
          this.router.navigate(['/adminHome']);
        } else {
          alert("Incorrect password or email !");
        }
    })
  }

}
