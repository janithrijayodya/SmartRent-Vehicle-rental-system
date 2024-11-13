import { Component } from '@angular/core';
import { CustomerHeaderComponent } from "../customer-header/customer-header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CustomerHeaderComponent,CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private http:HttpClient){}

  public dailyContact:any={
    name: "",
    contact: "",
    DrivingLicenseNumber: "",
    vehicleID: "",
  }

  public addContact(){
    this.http.post(" http://localhost:8080/dailyContact/add_contact", this.dailyContact).subscribe(data=>{
      alert("We will contact as soon as possible !")
    });
  }
}
