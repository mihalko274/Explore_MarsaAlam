import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  hotelData:any;
  ngOnInit(): void {
    this.hotelData = this.service.hotelDetails;
  }

}
