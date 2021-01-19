import { Component } from '@angular/core';
import {CitiesService} from './services/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city = '';

  cities: any;

  constructor(private data : CitiesService){} 
  
  ngOnInit(): void {
    this.data.getCities().subscribe(d => {
      this.cities = d;
    });
  }
}
