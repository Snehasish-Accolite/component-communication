import { Component, OnInit } from '@angular/core';
import { VendorModel } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {
    blockvendor: VendorModel ={age:0,name:"",city:""};
  
  constructor(private vendService: VendorService) { 
    const data=this.vendService.getDataStream();
    data.subscribe({
      next:(data: VendorModel ): void =>{
        this.blockvendor=data;
      }
    })

  }

  ngOnInit(): void {
  }

}
