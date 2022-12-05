import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VendorModel } from '../vendor';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  @Input('parentData') public vendors: any;
  constructor() { }

  ngOnInit(): void {
  }
  @Output() childEvent: EventEmitter<VendorModel> = new EventEmitter();
  selectedVendor? : VendorModel
  onSelect(vendor: VendorModel): void{
      this.selectedVendor = vendor;
      this.childEvent.emit(this.selectedVendor);
        
  }


}
