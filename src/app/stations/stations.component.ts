import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {CitiesService} from  '../services/cities.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  
  @Input() city :string = "";
  source :string = "";
  cityStations: any;
  constructor(private data : CitiesService) { }

  ngOnInit(): void {
    this.data.getCities().subscribe(d => {
      this.cityStations = d;
    });
  }


  play(station:string){
    this.source = station;
  }
}
