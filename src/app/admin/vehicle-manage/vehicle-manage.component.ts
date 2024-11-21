import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicle-manage',
  standalone: true,
  imports: [FormsModule,CommonModule],
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
  this.http.get(`http://localhost:8080/branch/search_by_branchID/${this.vehicle.branchID}`,{ responseType: 'text' }).subscribe(
    data=>{
      if(data){
          this.http.post("http://localhost:8080/vehicle/add_vehicle",this.vehicle,{ responseType: 'text' }).subscribe(
            (response)=>{
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Vehicle has been added",
                showConfirmButton: false,
                timer: 1500
              });
              this.clearForm();
              this.getAllVehicles();
              this.loadBranches();
            },
            (error)=>{
              alert("Vehicle is NOT added !")
            }
            )
      }else{
        alert("Branch is not exist !")
      }
    })
 }



// ============= UPDATE VEHICLE============

public searchedVehicle:any ={};

public viewSearchedVehicle(vehicle:any){
  this.searchedVehicle=vehicle;
}

public updateVehicle(){
  this.http.put(" http://localhost:8080/vehicle/update_vehicle", this.searchedVehicle,{ responseType: 'text' }).subscribe(data=>{
    alert("Vehicle has been updated !");
    this.loadBranches;
    this.getAllVehicles;
  })
}

// ==============DELETE VEHICLE================

public deleteVehicleByID(vehicleID: any){
  this.http.delete(`http://localhost:8080/vehicle/delete_vehicle_by_id/${vehicleID}`,{ responseType: 'text' }).subscribe(data=>{
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
      this.NoPlate="";
   })
}

// =======CLEAR FORM============

public clearForm(){
  this.vehicle.noPlate = '',
  this.vehicle.model = "",
  this.vehicle.year = "",
  this.vehicle.colour = "",
  this.vehicle.type = "",
  this.vehicle.description = "",
  this.vehicle.rentalPrice = "",
  this.vehicle.status = "",
  this.vehicle.branchID=""
}
  
}

