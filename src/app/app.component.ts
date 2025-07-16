import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { ParentComponent } from "./parent/parent.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { HighlightDirective } from './highlight.directive';


@Component({
  selector: 'app-root',
  standalone:true,

  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {




  title = 'Frontend';
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started:', event.url);
      }

      if (event instanceof NavigationEnd) {
        console.log('Navigation ended:', event.url);
      }

      if (event instanceof NavigationCancel) {
        console.log('Navigation canceled');
      }

      if (event instanceof NavigationError) {
        console.log('Navigation error:', event.error);
      }
    });
  }
}
