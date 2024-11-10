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
  this.getAllVehicles();
  this.getAllRentals();
}

  // ============ GET ALL CUSTOMERS===========

  public customerList : any =[];

  public getAllCustomers(){
    this.http.get(" http://localhost:8080/customer/get_all").subscribe(data=>{
      this.customerList=data;
    })
  }
  //  ================GET ALL VEHICLES==========
public vehicleList:any =[];

public getAllVehicles(){
   this.http.get(" http://localhost:8080/vehicle/get_all").subscribe(data=>{
    this.vehicleList=data;
   })
}

  //  ================GET ALL RENTALS==========
  public rentalList:any =[];

  public getAllRentals(){
     this.http.get("http://localhost:8080/rental/get_all").subscribe(data=>{
      this.rentalList=data;
     })
  }


// ================ADD RENTAL=================


public rental:any={
  noOfDays: "",
  pickUpDate: "",
  dropOffDate: "",
  vehicleID: "",
  customerID: ""
}

public addRental(){
  this.http.post(" http://localhost:8080/rental/add_rental", this.rental).subscribe(data=>{
    alert("Success !")
    this.getAllCustomers();
    this.getAllVehicles();
  })
}

// =========== UPDATE RENTAL===================

public searchedRental:any={};

public viewSearchedRental(rental:any){
  this.searchedRental=rental;
}

public updateRental(){
  this.http.put(" http://localhost:8080/rental/update_rental", this.searchedRental).subscribe(data=>{
    alert("updated !");
    this.getAllRentals();
    this.getAllCustomers();
    this.getAllVehicles();
  })
}

// =============== DELETE RENTAL====================

public deleteRentalByID(rentalID:any){
  this.http.delete(`http://localhost:8080/rental/delete_rental_by_id/${rentalID}`).subscribe(data=>{
    alert("Removed !");
    this.getAllCustomers();
    this.getAllRentals();
    this.getAllVehicles();
  })
}
}
