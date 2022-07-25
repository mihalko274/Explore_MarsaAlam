import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatafeedHotelsService {

  hotelDataV = '/assets/hotels_files/datafeed_hotels.csv';

  constructor(private http: HttpClient) { }

  getInfo() {

    return this.http.get(this.hotelDataV,{responseType:'text'});
  }
}
