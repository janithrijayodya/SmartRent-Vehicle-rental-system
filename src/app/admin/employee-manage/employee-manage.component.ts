import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';

@Component({
  selector: 'app-employee-manage',
  standalone: true,
  imports: [AdminHeaderComponent],
  templateUrl: './employee-manage.component.html',
  styleUrl: './employee-manage.component.css'
})
export class EmployeeManageComponent {

}
