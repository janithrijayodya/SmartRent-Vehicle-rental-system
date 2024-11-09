import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicle-manage',
  standalone: true,
  imports: [AdminHeaderComponent,FormsModule,CommonModule],
  templateUrl: './vehicle-manage.component.html',
  styleUrl: './vehicle-manage.component.css'
})
export class VehicleManageComponent {

  constructor(private http:HttpClient){
    this.loadBranches();
    this.getAllVehicles();
  }

 // ===========LOAD BRANCHES===========

 public branchList:any= [];

 public loadBranches(){
   this.http.get("http://localhost:8080/branch/get_all").subscribe(data=>{
     this.branchList=data;
   })
 }

//  ================GET ALL VEHICLES==========
public vehicleList:any =[];

public getAllVehicles(){
   this.http.get(" http://localhost:8080/vehicle/get_all").subscribe(data=>{
    this.vehicleList=data;
   })
}

 //============= ADD VEHICLE============
public vehicle:any={
  noPlate : "",
  model : "",
  year : "",
  colour : "",
  type : "",
  description : "",
  rentalPrice : "",
  status : "",
  branchID : "",
}

public addVehicle(){
  this.http.post("http://localhost:8080/vehicle/add_vehicle",this.vehicle).subscribe(data=>{
    alert("Vehicle has been added !");
    this.getAllVehicles();
    this.loadBranches();
  })
}

// ============= UPDATE VEHICLE============

public searchedVehicle:any ={};

public viewSearchedVehicle(vehicle:any){
  this.searchedVehicle=vehicle;
}

public updateVehicle(){
  this.http.put(" http://localhost:8080/vehicle/update_vehicle", this.searchedVehicle).subscribe(data=>{
    alert("Vehicle has been updated !");
    this.loadBranches;
    this.getAllVehicles;
  })
}

// ==============DELETE VEHICLE================

public deleteVehicleByID(vehicleID: any){
  this.http.delete(`http://localhost:8080/vehicle/delete_vehicle_by_id/${vehicleID}`).subscribe(data=>{
    alert("Vehicle is removed !");
    this.getAllVehicles();
    this.loadBranches();
  })
}

// ==========SEARCH BY NO PLATE==============

public NoPlate:any;

public searchedVehicleByNoPlate:any ={};

public searchByNoPlate(){
   this.http.get(`http://localhost:8080/vehicle/search_vehicle_by_noPlate/${this.NoPlate}`).subscribe(data=>{
      this.searchedVehicleByNoPlate = data;
   })
}
  
}

