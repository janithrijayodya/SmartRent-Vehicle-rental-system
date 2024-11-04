import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CustomerHeaderComponent } from "../customer-header/customer-header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, CustomerHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
