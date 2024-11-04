import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CustomerHeaderComponent } from '../customer-header/customer-header.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FooterComponent,CustomerHeaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
