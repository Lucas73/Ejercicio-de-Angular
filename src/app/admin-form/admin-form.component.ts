import { KeepPostsService } from './../keep-posts.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  public valor1: string = '';
  public valor2: string = '';
  public valor3: string = '';

  constructor(public keepPostsService:KeepPostsService) { }

  ngOnInit() {
  }

  public capturarInputs (){
    const noticia = {"titulo": this.valor1, "body": this.valor2, "imagen": this.valor3}
    this.keepPostsService.carryInputs(noticia)
  }


}
