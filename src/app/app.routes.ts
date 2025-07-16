import { Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonateComponent } from './donate/donate.component';
import { FormsModule, NgModel } from '@angular/forms';



export const routes: Routes = [
  {path:'home',component:HomeComponent, title: 'Home Page'},
  { path: 'contactus', component: ContactusComponent , title: 'Contact-Page'},

  {
    path:'AboutUs',component:AboutUsComponent, title: 'AboutUs Page'
  },
  {
    path:'Donate',component:DonateComponent, title: 'Donate Page'
  },
  

{ path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'lazy',
    loadComponent: () =>
      import('./features/support/support.component').then(m => m.SupportComponent)
  },

];
