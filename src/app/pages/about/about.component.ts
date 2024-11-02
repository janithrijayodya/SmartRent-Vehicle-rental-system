import { Component } from '@angular/core';
import { CustomerHeaderComponent } from '../customer-header/customer-header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CustomerHeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
