import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private content = new BehaviorSubject<string>("");
  private locationcontent = new BehaviorSubject<string>("");

  private impactArea_content = new BehaviorSubject([]);
  
  public share = this.content.asObservable();
  public locationshare = this.locationcontent.asObservable();
  public impactidshare = this.impactArea_content.asObservable();

  //sharing sentiment bifurcation data to chart component

  private clickedItem = new BehaviorSubject<string>("");
  public sharedData = this.clickedItem.asObservable();

  constructor() { }
  updateData(text){
    this.content.next(text);
  }

  updatelocation(locText){
    this.locationcontent.next(locText);
  }

  updateClickedData(selectedData){
    this.clickedItem.next(selectedData);
  }

  updateImpactIds(getIAIds){
    this.impactArea_content.next(getIAIds);
  }
}
