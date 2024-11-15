import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-daily-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './daily-contact.component.html',
  styleUrl: './daily-contact.component.css'
})
export class DailyContactComponent {

  constructor(private http:HttpClient){
    this.getAllContacts();
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
    //  ================GET ALL CONTACTS==========
    public contactList:any =[];
  
    public getAllContacts(){
       this.http.get(" http://localhost:8080/dailyContact/get_all").subscribe(data=>{
        this.contactList=data;
       })
    }

    // =============== DELETE CONTACT==========

    public deleteDailyContact(contactID:any){
      this.http.delete(`http://localhost:8080/dailyContact/delete_by_id/${contactID}`,{ responseType: 'text' }).subscribe(data=>{
        this.getAllContacts();
      })
    }

    // ============= CONFIRM RENTAL ORDER===============

    public VehicleID:any;

    public setVehicleID(vehicleID:any){
      this.VehicleID=vehicleID;
      this.rental.vehicleID = vehicleID;
      // console.log(this.vehicleID);
    }

    public rental:any={
      noOfDays: "",
      pickUpDate: "",
      dropOffDate: "",
      vehicleID: "",
      customerID: ""
    }
    
    public addRental(){
      console.log(this.rental);
      this.http.post(" http://localhost:8080/rental/add_rental", this.rental,{ responseType: 'text' }).subscribe(data=>{
        alert("Success !")
        this.getAllCustomers();
        this.getAllVehicles();
      })
    }
}
