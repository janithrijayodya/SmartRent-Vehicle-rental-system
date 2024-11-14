import { Component } from '@angular/core';
import { AdminHeaderComponent } from "../admin-header/admin-header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-land-admin',
  standalone: true,
  imports: [AdminHeaderComponent,RouterOutlet],
  templateUrl: './land-admin.component.html',
  styleUrl: './land-admin.component.css'
})
export class LandAdminComponent {

}
