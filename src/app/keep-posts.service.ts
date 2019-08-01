import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeepPostsService {
  public arrayInputs:any[]=[];

  constructor() { }
  
  carryInputs(news){
    this.arrayInputs.push(news);
  }

  offerInputs(){
    console.log(this.arrayInputs);
  }
}
