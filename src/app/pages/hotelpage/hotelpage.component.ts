import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-hotelpage',
  templateUrl: './hotelpage.component.html',
  styleUrls: ['./hotelpage.component.css']
})
export class HotelpageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) {}
  getHotelsId:any;
  hotelsData:any;

  ngOnInit(): void {
    this.getHotelsId = this.param.snapshot.paramMap.get('id');
    console.log(this.getHotelsId,'gethotelsId');
    if(this.getHotelsId)
    {
      this.hotelsData = this.service.hotelDetails.filter((value)=>{
        return value.id == this.getHotelsId;
      });
      console.log(this.hotelsData,'hotelsdata>>');
    }
  }

}
