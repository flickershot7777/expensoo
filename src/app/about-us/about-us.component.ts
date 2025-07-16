import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ChildComponent } from "../child/child.component";
import { ParentComponent } from "../parent/parent.component";
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
import { WeatherService } from '../services/weather.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  imports: [ChildComponent, CommonModule,HighlightDirective,FormsModule],
})
export class AboutUsComponent implements OnInit{

weatherData: any;
  city: string = 'Hyderabad'; // Change to any default city

  constructor(private weatherService: WeatherService, private Http:HttpClient) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {

    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => this.weatherData = data,
      error: (err) => console.error('Weather API Error:', err)

    });

  }




  message:string = '';


  handleMessage(msg: string) {
    this.message = msg;
  }
}






