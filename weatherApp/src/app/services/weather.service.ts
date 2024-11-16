import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { WeatherForecastData } from '../models/weather-forcast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>("http://api.weatherapi.com/v1/current.json?key=193478c6203b428688f80227241611&q="+ cityName + "&aqi=no")
  }

  getWeatherForcastData(cityName: string): Observable<WeatherForecastData>{
    return this.http.get<WeatherForecastData>("http://api.weatherapi.com/v1/forecast.json?key=193478c6203b428688f80227241611&q=" + cityName +"&days=1&aqi=no&alerts=no")
  }
}
