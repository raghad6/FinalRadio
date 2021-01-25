import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {CitiesService} from  '../services/cities.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  
  @Input() cityStations :string = "";
  @Input() cityName :string = "";

  source :string = "";
  playStatus :boolean = false;
  audio = new Audio();
  constructor(private data : CitiesService) {   }

  ngOnInit(): void {  }

  play(station:string){
    this.source = station;
    this.audio.pause();
    this.playStatus = false;
  }

  playAudio(){
    this.playStatus = !this.playStatus;
    if(this.playStatus){
      this.audio.src = this.source;
      this.audio.load();
      this.audio.play();
    } else {
      this.audio.pause();
      this.audio.src = "";
    }   
  }
}
