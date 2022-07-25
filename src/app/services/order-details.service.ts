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
    hotelImg:"/assets/hotels_files/iberotel_costa_mares/title_photo.jpg",
    hotelImg_1:"/assets/hotels_files/iberotel_costa_mares/pool.jpg",
    hotelImg2:"/assets/hotels_files/iberotel_costa_mares/pool_view.jpg",
    hotelImg3:"/assets/hotels_files/iberotel_costa_mares/reception.jpg",
    hotelImg4:"/assets/hotels_files/iberotel_costa_mares/reception_bar.jpg",
    hotelImg5:"/assets/hotels_files/iberotel_costa_mares/room_suite.jpg"
  },

  {
    id:"2",
    hotelName:"Royal Tulip Resort",
    hotelDescription:"Perfektne vyvážený rezort spojený s Magic Tulip Resortom. Priestranné rodinné izby, detský klub a široká piesočná pláž zaručí príjemnú dovolenku pre mladých aj starších. Útes Bay ponúka úchvatný podmorský svet a ďalšou unikátnou vlastnosťou je východ slnka, ktorý si môžete vychutnať ako pár na móle.",
    hotelImg:"/assets/hotels_files/royal_tulip_resort/pool_view.JPEG",
    hotelImg_1:"/assets/hotels_files/royal_tulip_resort/garden.JPEG",
    hotelImg2:"/assets/hotels_files/royal_tulip_resort/sea_view_2.JPEG",
    hotelImg3:"/assets/hotels_files/royal_tulip_resort/sunrise.JPEG",
    hotelImg4:"/assets/hotels_files/royal_tulip_resort/sea_view.JPEG",
    hotelImg5:"/assets/hotels_files/royal_tulip_resort/room_view.JPEG",
   },

  {
    id:"3",
    hotelName:"Magic Tulip Resort",
    hotelDescription:"Perfektne vyvážený rezort zaručuje pohodovú dovolenku pre celú rodinu. Priestranné rodinné izby, detský klub a široká piesočná pláž zaručí príjemnú dovolenku pre mladých aj starších. Útes Bay ponúka úchvatný podmorský svet a ďalšou unikátnou vlastnosťou je východ slnka, ktorý si môžete vychutnať ako pár na móle.",
    hotelImg:"/assets/hotels_files/magic_tulip_resort/magic_tulip_resort_pool_view.jpg",
  },

  {
    id:"4",
    hotelName:"Brayka Beach Resort",
    hotelDescription:"Moderný hoteloví komplex Brayka Bay a Brayka Beach leží na krásnej piesočnatej pláži južne od mesta Marsa Alam. Moderne zariadený hotelový resort s priateľskou rodinnou atmosférou ponúka nezabudnuteľné zážitky v podobe vynikajúcej kuchyne, šnorchlovania, potápania a relaxácie.",
    hotelImg:"/assets/hotels_files/brayka_beach_resort/brayka_beach_resort_sea_view.jpg",
  }


  ]
}
