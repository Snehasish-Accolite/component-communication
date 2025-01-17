import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VendorModel } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  @Input('parentData') public vendors: any;
  constructor(private vendService: VendorService) { }

  ngOnInit(): void {
  }
  @Output() childEvent: EventEmitter<VendorModel> = new EventEmitter();
  selectedVendor? : VendorModel
  onSelect(vendor: VendorModel): void{
      this.selectedVendor = vendor;
      this.childEvent.emit(this.selectedVendor);
      this.vendService.putDataToStream(this.selectedVendor);   
  }

}



