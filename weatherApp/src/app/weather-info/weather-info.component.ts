import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../services/weather.service';
import { response } from 'express';
import { WeatherData } from '../models/weather.model';
import { WeatherForecastData } from '../models/weather-forcast.model';

@Component({
  selector: 'app-weather-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-info.component.html',
  styleUrl: './weather-info.component.scss'
})
export class WeatherInfoComponent {
  
  constructor(private weatherService: WeatherService){
    this.currentTemp = 0;
  }

  weatherData?: WeatherData;
  weatherForcastData?: WeatherForecastData;
  currentTemp?: number;
  humidity?: number;
  windSpeed?: number;
  minTemp?: number;
  maxTemp?: number;

  ngOnInit(){
    this.weatherService.getWeatherData('Cincinnati')
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });

    this.weatherService.getWeatherForcastData('Cincinnati')
    .subscribe({
      next: (response) => {
        this.weatherForcastData = response;
        console.log(response);
      }
    });


    this.currentTemp = this.weatherData?.current.temp_f;
    this.minTemp = this.weatherForcastData?.forecast.forecastday[0].day.mintemp_f;
    this.maxTemp = this.weatherForcastData?.forecast.forecastday[0].day.maxtemp_f;
    this.humidity = this.weatherData?.current.humidity;
    this.windSpeed = this.weatherData?.current.wind_mph;

  }
}
