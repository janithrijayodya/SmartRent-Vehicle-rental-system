import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-manage',
  standalone: true,
  imports: [AdminHeaderComponent,CommonModule,FormsModule],
  templateUrl: './employee-manage.component.html',
  styleUrl: './employee-manage.component.css'
})
export class EmployeeManageComponent {

  constructor(private http:HttpClient){
    this.loadBranches();
  }

  // ===========LOAD BRANCHES===========

  public branchList:any= [];

  public loadBranches(){
    this.http.get("http://localhost:8080/branch/get_all").subscribe(data=>{
      this.branchList=data;
    })
  }

  // =============ADD EMPLOYEE==========

  public employee:any ={
    nic : "",
    employeeName : "",
    employeeAddress : "",
    employeeContact : "",
    employeePosition : "",
    branchID : ""
  };

  public addEmployee(){
    this.http.post(" http://localhost:8080/employee/add_employee",this.employee).subscribe(data=>{
      alert("Employee has been added !");
    })
  }

  // ========== DELETE EMPLOYEE ==========

  public deleteEmployee(){
    // this.http.delete(" http://localhost:8080/employee/delete_employee_by_id/1")
  }



  // ================ GET ALL EMPLOYEES========

  public employeeList:any =[];

  // create get all employee in beck end

}
