import { Component } from '@angular/core';
import { CustomerHeaderComponent } from "../customer-header/customer-header.component";
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [ VehicleCardComponent,CommonModule,FormsModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {

  constructor(private http:HttpClient){
    this.getAllVehicles();
  }

  //  ================GET ALL VEHICLES==========
public vehicleList:any =[];

public getAllVehicles(){
   this.http.get(" http://localhost:8080/vehicle/get_all").subscribe(data=>{
    this.vehicleList=data;
   })
}

// ==========SEARCH BY TYPE==============

public btnType(type:any){
  this.http.get(`http://localhost:8080/vehicle/search_vehicle_by_type/${type}`).subscribe(data=>{
    this.vehicleList=data;
  })
}

// ====================SEARCH BY COLOUR===================

public btnColour(colour:any){
  this.http.get(` http://localhost:8080/vehicle/search_vehicle_by_colour/${colour}`).subscribe(data=>{
    this.vehicleList=data;
})
}

// ============SAERCH BU MODEL===================

 public btnModel(model:any){
  this.http.get(` http://localhost:8080/vehicle/search_vehicle_by_model/${model}`).subscribe(data=>{
    this.vehicleList=data;
  })
 }


}
