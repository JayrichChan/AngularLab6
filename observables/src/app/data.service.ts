import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  GetStudentData(): Observable<any>{
    return this.http.get("https://jsonblob.com/api/jsonblob/8a00ee5a-1bd9-11e8-88aa-45de95a30f37")
          .map(obs => obs.json());
  }

  GetWeatherData(): Observable<any>{
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=4839d42ef4f30cdfa9f83bd9b055e36f")
        .map(w => w.json());
  }
}
