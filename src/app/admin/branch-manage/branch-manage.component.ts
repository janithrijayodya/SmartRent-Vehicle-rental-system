import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-branch-manage',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './branch-manage.component.html',
  styleUrl: './branch-manage.component.css'
})
export class BranchManageComponent {

  public branch:any = {
    location :"" ,
    address : "",
    branchEmail : "",
    branchContact : "",
    password:""
  };

  constructor(private http:HttpClient){
    this.loadTable();
  }
     
  public addBranch(){
    console.log(this.branch); 
    this.http.post(" http://localhost:8080/branch/add_branch",this.branch,{ responseType: 'text' }).subscribe(data=>{
      alert("Branch has been added !");
    })
  }

  public searchedBranch:any ={};
  public location:any;

  public searchByLocation(){
    this.http.get(`http://localhost:8080/branch/search_by_location/${this.location}`).subscribe(data=>{
      this.searchedBranch=data;
    })
  }

  public branchList:any =[];

  loadTable(){
      this.http.get(" http://localhost:8080/branch/get_all").subscribe(data=>{
        console.log(data);
        this.branchList =data;
      })
  }

  public deleteBranchByID(branchID:any){
    console.log(branchID);
    this.http.delete(`http://localhost:8080/branch/delete_branch_by_branchID/${branchID}`,{ responseType: 'text' }).subscribe(data=>{
      alert("branch deleted !");
      this.loadTable();
    })
  }

  public branchTemp : any = {}
  
  public updateBranch(branch :any){
    this.branchTemp = branch;
  }

  public saveUpdatedBranch(){
    this.http.put("http://localhost:8080/branch/update_by_branchID",this.branchTemp,{ responseType: 'text' }).subscribe(data=>{
      alert("branch updated");
    })
  }
}
