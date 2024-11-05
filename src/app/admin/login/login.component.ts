import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminHomeComponent } from '../admin-home/admin-home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AdminHomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){}

  goToAdminPage(pageName:String):void{
      this.router.navigate(['/adminHome'])
  }

}
