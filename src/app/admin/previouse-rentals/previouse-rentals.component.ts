import { Component } from '@angular/core';
import { AdminHeaderComponent } from "../admin-header/admin-header.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-previouse-rentals',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './previouse-rentals.component.html',
  styleUrl: './previouse-rentals.component.css'
})
export class PreviouseRentalsComponent {

constructor(private http:HttpClient){
  this.getAllRentals();
}

  //  ================GET ALL RENTALS==========
  public rentalList:any =[];

  public getAllRentals(){
     this.http.get("http://localhost:8080/rental/get_all").subscribe(data=>{
      this.rentalList=data;
     })
  }
// ======================BILL================

public rentDays: any = "";
public rentkm: any = "";

public billingVehicle: any = {};

public totalPayment: any = 0; 

public generateBill(vehicleID: any) {
  this.http.get(`http://localhost:8080/vehicle/search_vehicle_by_id/${vehicleID}`).subscribe((data) => {
    this.billingVehicle = data;
  });
}

public proceedPayment() {
  this.totalPayment = (this.rentDays * this.billingVehicle.rentalPrice) + (this.rentkm * 25);

  Swal.fire({
    title: "Total amount =>  Rs:"+`${this.totalPayment}`,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });

  this.rentDays="";
  this.rentkm="";
}
}