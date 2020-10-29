import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AdProductTypeService} from './ad-product-type.service';

@Component({
  selector: 'app-ad-product-type',
  templateUrl: './ad-product-type.component.html',
  styleUrls: ['./ad-product-type.component.css']
})
export class AdProductTypeComponent implements OnInit {

  constructor(private protypeService: AdProductTypeService) { }

  public items: any[];
  ngOnInit(): void {
    this.protypeService.getList().subscribe((res: any)=>{
      
      this.items = res;
      console.log(this.items);
    });
  }

}
