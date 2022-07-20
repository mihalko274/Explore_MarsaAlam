import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

// added javascript function src/assets/js/scripts.js
declare var slideIndex: any;
declare var plusSlides: any;
declare var currentSlide: any;
declare var showSlides: any;

@Component({
  selector: 'app-hotelpage',
  templateUrl: './hotelpage.component.html',
  styleUrls: ['./hotelpage.component.css']
})
export class HotelpageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) {}
  getHotelId:any;
  hotelData:any;

  ngOnInit(): void {
    this.getHotelId = this.param.snapshot.paramMap.get('id');
    if(this.getHotelId)
    {
      this.hotelData = this.service.hotelDetails.filter((value)=>{
        return value.id == this.getHotelId;
      });
    }
    // added javascript function src/assets/js/scripts.js
    new slideIndex();
    new plusSlides();
    new currentSlide();
    new showSlides();

  }
  title = 'app-js';
}
