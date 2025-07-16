import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
contact='/contactus';
AboutUs='/AboutUs'; 
Donate='/Donate';

constructor(private router:Router){}
RedirectContact(){
this.router.navigate([this.contact]);
}

RedirectAboutUs(){
this.router.navigate([this.AboutUs]);
}
RedirectDonate(){
this.router.navigate([this.Donate]);
}
}
