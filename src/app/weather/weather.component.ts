import { Component } from '@angular/core';
import { WheatherService } from '../services/wheather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  wdata={
    lname:"",
    humidity:"",
    temp:"",
    widspeed:"",
    description:""

  }
  constructor(private service:WheatherService){}

  fetchwheather (inpt:any){
    console.log(inpt.value);
    this.service.findwheather(inpt.value).then(res=>res.json()).then(data=>{
      this.wdata.lname=data.name,
      this.wdata.temp=data.main.temp,
      this.wdata.humidity=data.main.humidity,
      this.wdata.widspeed=data.wind.speed,
      this.wdata.description=data.weather[0].description
    })
    
  }

  

}
