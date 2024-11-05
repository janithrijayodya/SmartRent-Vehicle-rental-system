import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';

@Component({
  selector: 'app-vehicle-manage',
  standalone: true,
  imports: [AdminHeaderComponent],
  templateUrl: './vehicle-manage.component.html',
  styleUrl: './vehicle-manage.component.css'
})
export class VehicleManageComponent {

}
