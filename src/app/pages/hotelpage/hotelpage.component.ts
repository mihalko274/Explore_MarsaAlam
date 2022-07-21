import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-hotelpage',
  templateUrl: './hotelpage.component.html',
  styleUrls: ['./hotelpage.component.css'],
})

export class HotelpageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) {}
  getHotelName:any;
  hotelData:any;

  ngOnInit(): void {
    this.getHotelName = this.param.snapshot.paramMap.get('hotelName');
    if(this.getHotelName)
    {
      this.hotelData = this.service.hotelDetails.filter((value)=>{
        return value.hotelName == this.getHotelName;
      });
    }
  }

  thumbsSwiper: any;
}
