import { Component } from '@angular/core';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  
  constructor(private http:HttpClient){
    this.loadBranches();
    this.getAllCustomers();
  }

  // ===========LOAD BRANCHES===========

  public branchList:any= [];

  public loadBranches(){
    this.http.get("http://localhost:8080/branch/get_all").subscribe(data=>{
      this.branchList=data;
    })
  }

  // =======ADD CUSTOMER======

  public customer:any ={
    DLNumber : "",
    customerName : "",
    customerContact : "",
    customerEmail : "",
    customerAddress : ""
  }

  public addCustomer(){
    this.http.post(" http://localhost:8080/customer/add_customer", this.customer,{ responseType: 'text' }).subscribe(data=>{
      alert("Customerr has benn added!");
      this.getAllCustomers();
    })
  }

  // ============ GET ALL CUSTOMERS===========

  public customerList : any =[];

  public getAllCustomers(){
    this.http.get(" http://localhost:8080/customer/get_all").subscribe(data=>{
      this.customerList=data;
    })
  }

  // ============= DELETE CUSTOMER==============

  public deleteCustomerByID(customerID:any){
    this.http.delete(`http://localhost:8080/customer/delete_by_id/${customerID}`,{ responseType: 'text' }).subscribe(data=>{
      alert("Customer has been deleted !")
      this.getAllCustomers();
    })
  }

  // ============= UPDATE CUSTOMER===============

  public viewCustomer:any = {}

  public viewUpdateModel(customer:any){
    this.viewCustomer=customer;
  }

  public updateCustomer(){
    this.http.put(" http://localhost:8080/customer/update_customer",this.viewCustomer,{ responseType: 'text' }).subscribe(data=>{
      alert("Customer has been updated !");
      this.getAllCustomers();
    })
  }

  // =============SEARCH CUSTOMER BY DLNUMBER============

  public DLicenseNumber:any;

  public searchedCustomer:any ={};

  public searchCustomerByDLNumber(){
    this.http.get(`http://localhost:8080/customer/search_customer/${this.DLicenseNumber}`).subscribe(data=>{
        this.searchedCustomer=data;
    })
  }
}
