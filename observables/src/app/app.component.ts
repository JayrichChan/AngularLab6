import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(private dataService: DataService){}
  students : any = [];
  weather : any = [];
ngOnInit(){
  this.dataService.GetStudentData().subscribe(data => 
  {
    this.students = data.students;
  });
    this.dataService.GetWeatherData().subscribe(data =>
    {
      this.weather = data.weather;
    });
  }
}
