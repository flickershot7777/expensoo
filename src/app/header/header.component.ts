import { Component } from '@angular/core';


import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  contact='/contactus';
  AboutUs='/AboutUs';
  Donate='/donate';
  routerPath: string = '';
  currentRoute: any;

RedirectContact(){
this.router.navigate([this.contact]);
}
RedirectAboutUs(){
  this.router.navigate(['/AboutUs']);

}

 constructor(private router: Router) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.routerPath  = event.urlAfterRedirects;
    });
  }
basedOnUrl(){
  console.log('====================================');
  console.log('Current URL:', this.router.url, window);
  console.log('====================================');
  const currentUrl = this.router.url;
 // this.routerPath = currentUrl;
  if (currentUrl === '/') {
    return 'active';
  } else {
    return '';
  }
}

}
