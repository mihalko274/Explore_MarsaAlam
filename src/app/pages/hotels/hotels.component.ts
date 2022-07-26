import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { DatafeedHotelsService } from 'src/app/services/datafeed-hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {



  constructor(private datafeedhotelService:DatafeedHotelsService) { }
  hotelDataV: any = [];

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.datafeedhotelService.getInfo().subscribe(data => {
      const list = data.split('\n');
      list.forEach(e => {
        this.hotelDataV.push(e);
      })
    })

  }

}
