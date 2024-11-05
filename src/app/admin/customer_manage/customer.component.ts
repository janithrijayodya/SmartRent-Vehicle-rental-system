import { Component } from '@angular/core';
import { AdminHomeComponent } from '../admin-home/admin-home.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [AdminHeaderComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
