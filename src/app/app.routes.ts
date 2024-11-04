import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'vehicles',
        component:VehiclesComponent
    },
    {
        path:'services',
        component:ServicesComponent
    },
    {
        path:'contact',
        component:ContactComponent
    }
];
