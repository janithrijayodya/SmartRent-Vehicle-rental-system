import { Component } from '@angular/core';
import { CustomerHeaderComponent } from "../customer-header/customer-header.component";
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CustomerHeaderComponent, VehicleCardComponent, FooterComponent],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {

}
