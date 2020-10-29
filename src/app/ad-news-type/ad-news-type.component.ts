import { Component, OnInit } from '@angular/core';
import {AdNewsTypeService} from './ad-news-type.service';
@Component({
  selector: 'app-ad-news-type',
  templateUrl: './ad-news-type.component.html',
  styleUrls: ['./ad-news-type.component.css']
})
export class AdNewsTypeComponent implements OnInit {

  constructor(private typenewService: AdNewsTypeService) { }

  public items: any[];
  ngOnInit(): void {
    this.typenewService.getList().subscribe((res: any)=>{
      
      this.items = res;
      console.log(this.items);
    });
  }

}
