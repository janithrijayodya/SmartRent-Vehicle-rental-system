import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rentals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rentals.component.html',
  styleUrl: './rentals.component.css'
})
export class RentalsComponent {
  constructor(private http: HttpClient) {
    this.getAllCustomers();
    this.getAllVehicles();
    this.getAllRentals();
  }

  // ============ GET ALL CUSTOMERS===========

  public customerList: any = [];

  public getAllCustomers() {
    this.http.get(" http://localhost:8080/customer/get_all").subscribe(data => {
      this.customerList = data;
    })
  }
  //  ================GET ALL VEHICLES==========
  public vehicleList: any = [];

  public getAllVehicles() {
    this.http.get(" http://localhost:8080/vehicle/get_all").subscribe(data => {
      this.vehicleList = data;
    })
  }

  //  ================GET ALL RENTALS==========
  public rentalList: any = [];

  public getAllRentals() {
    this.http.get("http://localhost:8080/rental/get_all").subscribe(data => {
      this.rentalList = data;
    })
  }


  // ================ADD RENTAL=================


  public rental: any = {
    noOfDays: "",
    pickUpDate: "",
    dropOffDate: "",
    vehicleID: "",
    customerID: "",
    email: ""
  }

  public addRental() {
    this.http.post(" http://localhost:8080/rental/add_rental", this.rental, { responseType: 'text' }).subscribe(
      data => {
        alert("Rental is added !");
        this.getAllCustomers();
        this.getAllVehicles();
        this.http.get(`http://localhost:8080/email/sendEmail/${this.rental.email}`, { responseType: 'text' }).subscribe(
          emailData => {
            //  this.updateVehicleStatus();
          },
          emailError => {
            alert("email faild")
          })

      },
      error => {
        alert("rental faild")
      })
  }

  // ==============update vehicle status=============
  public vehicleUpdateData:any = {
    vehicleID: this.rental.vehicleID,
    status: "Unavailable"
  }
 
  public updateVehicleStatus(){
    // console.log(this.vehicleUpdateData);
    this.http.put(" http://localhost:8080/vehicle/update_vehicle", this.vehicleUpdateData,{ responseType: 'text' }).subscribe(
      updateData => {
        alert("status aupated")
      },
      updateError => {
        alert("not updated")
      }
    )
  }
  // =========== UPDATE RENTAL===================

  public searchedRental: any = {};

  public viewSearchedRental(rental: any) {
    this.searchedRental = rental;
  }

  public updateRental() {
    this.http.put(" http://localhost:8080/rental/update_rental", this.searchedRental, { responseType: 'text' }).subscribe(data => {
      alert("updated !");
      this.getAllRentals();
      this.getAllCustomers();
      this.getAllVehicles();
    })
  }

  // =============== DELETE RENTAL====================

  public deleteRentalByID(rentalID: any) {
    this.http.delete(`http://localhost:8080/rental/delete_rental_by_id/${rentalID}`, { responseType: 'text' }).subscribe(data => {
      alert("Removed !");
      this.getAllCustomers();
      this.getAllRentals();
      this.getAllVehicles();
    })
  }

  // =============== CLEAR FORM=============

  public clearForm(){
    this.rental.noOfDays= "",
    this.rental.pickUpDate= "",
    this.rental.dropOffDate= "",
    this.rental.vehicleID= "",
    this.rental.customerID= "",
    this.rental.email= ""
  }
}
