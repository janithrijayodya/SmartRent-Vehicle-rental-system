import { Component } from '@angular/core';
import { AdminHeaderComponent } from "../admin-header/admin-header.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-previouse-rentals',
  standalone: true,
  imports: [AdminHeaderComponent,FormsModule,CommonModule],
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

}
