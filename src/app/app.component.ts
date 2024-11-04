import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerHeaderComponent } from './pages/customer-header/customer-header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Smart-rent';
}
