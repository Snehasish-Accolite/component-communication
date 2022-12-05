import { Component, OnInit } from '@angular/core';
import { VendorModel } from './vendor';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  public vendors: VendorModel[] = [
    { name: "Ram", age: 23, city: "Kolkata"  },
    { name: "Jay", age: 25, city: "Delhi"  },
    { name: "Varun", age: 26, city: "Mumbai"  },
    { name: "Karan", age: 21, city: "Pune"},
    
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.vendors)
  }
  selectedVendor:VendorModel= {name:"",age:0,city:""}

}
