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
    hotelDescription:"Luxusný hotel Iberotel Costa Mares leží na krásnej piesočnatej pláži a úžasneho živého zálivu Marsa Mubarak. Moderne zariadený hotelový rezort s priateľskou rodinnou atmosférou ponúka nezabudnuteľné zážitky v podobe vynikajúcej kuchyne, šnorchlovania, potápania a relaxácie.",
    hotelImg:"/assets/hotels_files/iberotel_costa_mares.jpg",
  }

  ]
}
