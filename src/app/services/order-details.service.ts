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
    hotelImg:"/assets/hotels_files/iberotel_costa_mares.jpg"
  },

  {
    id:"2",
    hotelName:"Royal Tulip Resort",
    hotelDescription:"Perfektne vyvážený rezort spojený s Magic Tulip Resortom. Priestranné rodinné izby, detský klub a široká piesočná pláž zaručí príjemnú dovolenku pre mladých aj starších. Útes Bay ponúka úchvatný podmorský svet a ďalšou unikátnou vlastnosťou je východ slnka, ktorý si môžete vychutnať ako pár na móle.",
    hotelImg:"/assets/hotels_files/royal_tulip_resort.jpg"
  },

  {
    id:"3",
    hotelName:"Magic Tulip Resort",
    hotelDescription:"Perfektne vyvážený rezort zaručuje pohodovú dovolenku pre celú rodinu. Priestranné rodinné izby, detský klub a široká piesočná pláž zaručí príjemnú dovolenku pre mladých aj starších. Útes Bay ponúka úchvatný podmorský svet a ďalšou unikátnou vlastnosťou je východ slnka, ktorý si môžete vychutnať ako pár na móle.",
    hotelImg:"/assets/hotels_files/magic_tulip_resort.jpg"
  },

  {
    id:"4",
    hotelName:"Brayka Beach Resort",
    hotelDescription:"Moderný hoteloví komplex Brayka Bay a Brayka Beach leží na krásnej piesočnatej pláži južne od mesta Marsa Alam. Moderne zariadený hotelový resort s priateľskou rodinnou atmosférou ponúka nezabudnuteľné zážitky v podobe vynikajúcej kuchyne, šnorchlovania, potápania a relaxácie.",
    hotelImg:"/assets/hotels_files/brayka_beach_resort.jpg"
  }


  ]
}
