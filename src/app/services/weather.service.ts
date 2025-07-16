
// File: src/app/services/weather.service.ts
// This service fetches weather data from an external API.
// It uses Angular's HttpClient to make HTTP requests and returns an Observable for the weather data.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.weatherapi.com/v1/current.json';
  private apiKey = 'e1c39617e423435989080135251007'; // Your API key

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}`;
    return this.http.get(url);
  }
  postWeatherData(data:any): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}`;
    return this.http.post(url, data);
  }
}
