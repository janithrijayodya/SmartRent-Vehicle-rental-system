import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { VehiclesComponent } from './pages/vehicles/vehicles.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CustomerComponent } from './admin/customer_manage/customer.component';
import { VehicleManageComponent } from './admin/vehicle-manage/vehicle-manage.component';
import { EmployeeManageComponent } from './admin/employee-manage/employee-manage.component';
import { BranchManageComponent } from './admin/branch-manage/branch-manage.component';
import { RentalsComponent } from './admin/rentals/rentals.component';
import { PreviouseRentalsComponent } from './admin/previouse-rentals/previouse-rentals.component';
import { DailyContactComponent } from './admin/daily-contact/daily-contact.component';

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
    },
    {
        path:'admin',
        component:LoginComponent
    },
    {
        path: 'adminHome',
        component: AdminHomeComponent
    },
    {
        path : 'customerManage',
        component:CustomerComponent
    },
    {
        path: 'vehicleManage',
        component : VehicleManageComponent
    },
    {
        path: 'employeeManage',
        component: EmployeeManageComponent
    },
    {
        path: 'branchManage',
        component: BranchManageComponent
    },
    {
        path: 'rental',
        component: RentalsComponent
    },
    {
        path: 'previouseRentals',
        component: PreviouseRentalsComponent
    },
    {
        path: 'dailyContacts',
        component: DailyContactComponent
    }

];
