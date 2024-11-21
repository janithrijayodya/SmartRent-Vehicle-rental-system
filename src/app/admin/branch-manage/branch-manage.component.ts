import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-branch-manage',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './branch-manage.component.html',
  styleUrl: './branch-manage.component.css'
})
export class BranchManageComponent {

  constructor(private http:HttpClient){
    this.loadTable();
  }
  
  // ============ ADD BRANCH=============

  public branch:any = {
    location :"" ,
    address : "",
    branchEmail : "",
    branchContact : "",
    password:""
  };
     
  public addBranch(){
    console.log(this.branch); 
    this.http.post(" http://localhost:8080/branch/add_branch",this.branch,{ responseType: 'text' }).subscribe(
      data=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Branch has been added",
          showConfirmButton: false,
          timer: 1500
        });
        
        this.clearFprm();
        this.loadTable();
      },
      error=>{
        alert("Branch is not added !");
      })
  }

// ==============SEARCH BY LOCATION===========

  public searchedBranch:any ={};
  public location:any;

  public searchByLocation(){
    this.http.get(`http://localhost:8080/branch/search_by_location/${this.location}`).subscribe(data=>{
      this.searchedBranch=data;
      this.location="";
    })
  }

  // ==========GET ALL BRANCHES===========

  public branchList:any =[];

  loadTable(){
      this.http.get(" http://localhost:8080/branch/get_all").subscribe(data=>{
        console.log(data);
        this.branchList =data;
      })
  }

  // ===========DELETE BRANCH=============

  public deleteBranchByID(branchID:any){
    
    console.log(branchID);
    this.http.delete(`http://localhost:8080/branch/delete_branch_by_branchID/${branchID}`,{ responseType: 'text' }).subscribe(
      data=>{
        alert("branch deleted !");
        this.loadTable();
      },
      error=>{
        alert("enter a valid Branch")
      })
  }

  // ========= UPDATE BRANCH==============

  public branchTemp : any = {}
  
  public updateBranch(branch :any){
    this.branchTemp = branch;
  }

  public saveUpdatedBranch(){
    this.http.put("http://localhost:8080/branch/update_by_branchID",this.branchTemp,{ responseType: 'text' }).subscribe(data=>{
      alert("branch updated");
    })
  }

  // ================CLEAR BRANCH================
  public clearFprm(){
    this.branch.location ="" ,
    this.branch.address = "",
    this.branch.branchEmail = "",
    this.branch.branchContact = "",
    this.branch.password = ""
  }
}
