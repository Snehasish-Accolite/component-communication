import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs';
import { VendorModel } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  v!:VendorModel

  private dataStream= new BehaviorSubject<VendorModel>(this.v);
  constructor() { }

  getDataStream()
  {
    return this.dataStream.asObservable();
  }

  putDataToStream(data: VendorModel){

    this.dataStream.next(data)
  }
}
