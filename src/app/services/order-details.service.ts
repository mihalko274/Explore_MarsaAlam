import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  hotelDetails = [
  {
    id:"1",
    hotelName:"Iberotel Costa Mares",
    hotelDescription:"test",
    hotelImg:"",
  }

  ]
}
