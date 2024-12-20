import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.css'
})
export class VehicleCardComponent {
  constructor(private http:HttpClient){}

  @Input()
  public vehicleInformation:any = {};

  public customer:any ={
    DLNumber : "",
    customerName : "",
    customerContact : "",
    customerEmail : "",
    customerAddress : ""
  }

  public addCustomer(){
    this.http.post("http://localhost:8080/customer/add_customer", this.customer,{ responseType: 'text' }).subscribe(data=>{
      this.addDailyContact();
    })
  }

  // public VehicleID:any ;

  public getVehicleID(vehicleID:any){
    console.log(vehicleID);
    this.vehicleInformation.vehicleID=vehicleID;
  }
  
  public addDailyContact(){
    console.log(this.vehicleInformation.vehicleID);

    const dailyContect = {
      name: this.customer.customerName, 
      contact: this.customer.customerContact,
      DrivingLicenseNumber : this.customer.DLNumber,
      vehicleID: this.vehicleInformation.vehicleID
    };

    console.log(dailyContect);

    this.http.post("http://localhost:8080/dailyContact/add_contact", dailyContect,{ responseType: 'text' }).subscribe(data=>{
      alert("You are signed up !");
    })
  }
}
