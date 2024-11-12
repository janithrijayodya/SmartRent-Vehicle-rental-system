import { Component } from '@angular/core';
import { CustomerHeaderComponent } from "../customer-header/customer-header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CustomerHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
