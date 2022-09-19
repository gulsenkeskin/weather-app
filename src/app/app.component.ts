import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }
  cityName: string = 'Londra';

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response: WeatherData) => {
        this.weatherData = response;
        console.log(response);

      }
    })
  }
}
