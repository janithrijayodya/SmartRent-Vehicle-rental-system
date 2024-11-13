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
    this.getAllEmployees();
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
    branchID: "" 

  };

  public addEmployee(){
    // console.log(this.employee.branchID);
    if (!this.employee.branchID) {
      alert("Branch ID is required!");
      return;
  }
    this.http.get(`http://localhost:8080/branch/search_by_branchID/${this.employee.branchID}`).subscribe(
      data=>{
      // console.log(this.employee);
            this.http.post(" http://localhost:8080/employee/add_employee",this.employee).subscribe(
              (response)=>{
                alert("Employee has been added !");
                this.getAllEmployees();
                this.loadBranches();
                },
              (error)=>{
                alert("Employee is not added !");
              });
     
      },
    error=>{
      alert("error fetching branch data");
    });
  }

  // ========== DELETE EMPLOYEE ==========

  public deleteEmployee(employeeID:any){
    this.http.delete(`http://localhost:8080/employee/delete_employee_by_id/${employeeID}`).subscribe(data=>{
      alert("Employee has been deleted !");
      this.getAllEmployees();
      this.loadBranches();
    })
  }



  // ================ GET ALL EMPLOYEES========

  public employeeList:any =[];

  public getAllEmployees(){
    this.http.get(" http://localhost:8080/employee/get_all").subscribe(data=>{
      this.employeeList=data;
    })
  }

  // =========== UPDATE EMPLOYEE============

  public searchedEmployee:any ={};

  public viewSearchedEmployee(employee:any){
      this.searchedEmployee=employee;
  }

  public updateEmployee(){
    this.http.put(" http://localhost:8080/employee/update_employee",this.searchedEmployee).subscribe(data=>{
      this.getAllEmployees();
      this.loadBranches();
    })
  }

  // ============SEARCH EMPLOYEE =============

  public nic:any ;

  public searchedEmployeeObject:any={};

  public searchEmployeeByNIC(){
    this.http.get(`http://localhost:8080/employee/search_employee_by_nic/${this.nic}`).subscribe(data=>{
        this.searchedEmployeeObject=data;
    })
  }

}
