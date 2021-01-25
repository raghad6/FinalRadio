import { Component } from '@angular/core';
import { CitiesService } from './services/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'radio';
  city = '';
  cities: any;
  selectedCity: string = '';
  selectedStations :any;

  constructor(private data: CitiesService ,
    private citiesService: CitiesService
    ) { }

  ngOnInit(): void {
    this.data.getCities().subscribe(d => {
      this.cities = d;
    });
  }

  // public myimage = "./assets/play.png";
  // Change() {
  //   if (this.myimage == "./assets/play.png") {
  //     this.myimage = "./assets/pause.png";
  //   } else {
  //     this.myimage = "./assets/play.png";
  //   }
  // }



  selectCity(city : any) {
    console.log(city);
    
  }
  onChange(event:any) {
    this.selectedCity = event.target.value;
    for(let i=0; i<this.cities.length ;i++){
      if(this.cities[i].Name === event.target.value) {
        this.selectedStations = this.cities[i]['Stations'];
      }
    }
  }
}