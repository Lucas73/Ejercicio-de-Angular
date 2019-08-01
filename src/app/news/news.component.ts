import { Component, OnInit } from '@angular/core';
import { KeepPostsService } from './../keep-posts.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public objeto: {} = {};

  constructor(public keepPostsService:KeepPostsService) { this.callArray() }

  ngOnInit() {
  }

  public callArray(){
    this.keepPostsService.offerInputs();
  }


}
