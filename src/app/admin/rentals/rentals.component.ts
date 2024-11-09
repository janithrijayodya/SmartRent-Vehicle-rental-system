import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rentals',
  standalone: true,
  imports: [AdminHeaderComponent,CommonModule,FormsModule],
  templateUrl: './rentals.component.html',
  styleUrl: './rentals.component.css'
})
export class RentalsComponent {
constructor(private http:HttpClient){
  this.getAllCustomers();
}

  // ============ GET ALL CUSTOMERS===========

  public customerList : any =[];

  public getAllCustomers(){
    this.http.get(" http://localhost:8080/customer/get_all").subscribe(data=>{
      this.customerList=data;
    })
  }

}
