import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerHeaderComponent } from './pages/customer-header/customer-header.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomerHeaderComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Smart-rent';
}
