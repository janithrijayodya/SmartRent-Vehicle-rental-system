import { Component } from '@angular/core';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';

@Component({
  selector: 'app-rentals',
  standalone: true,
  imports: [AdminHeaderComponent],
  templateUrl: './rentals.component.html',
  styleUrl: './rentals.component.css'
})
export class RentalsComponent {

}
