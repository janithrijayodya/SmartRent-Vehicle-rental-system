import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerHeaderComponent } from "../customer-header/customer-header.component";

@Component({
  selector: 'app-land-user',
  standalone: true,
  imports: [RouterOutlet, CustomerHeaderComponent],
  templateUrl: './land-user.component.html',
  styleUrl: './land-user.component.css'
})
export class LandUserComponent {

}
