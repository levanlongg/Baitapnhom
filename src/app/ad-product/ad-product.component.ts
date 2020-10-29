import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AdProductService } from './ad-product.service'
@Component({
  selector: 'app-ad-product',
  templateUrl: './ad-product.component.html',
  styleUrls: ['./ad-product.component.css']
})
export class AdProductComponent implements OnInit {

  constructor(private protypeService: AdProductService) { }

  public items: any[];
  ngOnInit(): void {
    this.protypeService.getList().subscribe((res: any)=>{
      
      this.items = res;
      console.log(this.items);
    });
  }

}

