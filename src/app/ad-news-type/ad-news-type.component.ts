import { Component, OnInit,ViewChild  } from '@angular/core';
import {AdNewsTypeService} from './ad-news-type.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-ad-news-type',
  templateUrl: './ad-news-type.component.html',
  styleUrls: ['./ad-news-type.component.css']
})
export class AdNewsTypeComponent implements OnInit {

  @ViewChild('editAndADD', { static: false }) editAndADD: ModalDirective;
  constructor(private typenewService: AdNewsTypeService) { }

  public entity: any;
  public items: any[];
  public id: string;
  public checkedid: any;
  ngOnInit(): void {
    // this.typenewService.getList().subscribe((res: any)=>{
      
    //   this.items = res;
    //   console.log(this.items);
    // });
    this.loadData();
  }
  loadData(){
    this.typenewService.getList().subscribe((res: any)=>{
      
      this.items = res;
      console.log(this.items);
    });
  }
  showAdd(){
    this.entity={};
    this.checkedid=0;
    this.editAndADD.show();
  }
  showEdit(id: any){
    debugger;
    this.checkedid=1;
    this.typenewService.GetSingle(id).subscribe((res)=>{
      
      this.entity = res;
    });
    this.editAndADD.show();
  }
  SaveForm(values: any){
    if(this.checkedid == 0){

      this.typenewService.postItme(values).subscribe((res)=>{
        alert(res);
        if(res){
          alert("add-success");
          this.loadData();
          this.editAndADD.hide();
        }
      });
    }
    else{
      this.id = values.id;
      alert(this.id);
      // console.log(values.id);
      this.typenewService.editItem(this.id,values).subscribe((res)=>{
        alert(res);
        debugger;
        if(res){
          alert("edit-success");
          this.loadData();
          this.editAndADD.hide();
        }
      });
    }
  }
  deleteShow(id: string){
    if(confirm("delete this item?")){
      this.typenewService.deleteItem(id).subscribe(res=>{
        alert("delete successs");
        this.loadData();
      });
    }
  }
}
