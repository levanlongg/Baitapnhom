import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdProductService {

  public urlAPI = "http://localhost:61487/api/Clothes_Product/GetClothes_Product";
  constructor(private _http: HttpClient) { }
  
  getList(): Observable<any[]>{
    return this._http.get<any[]>(this.urlAPI).pipe(map(res => {
        return res;
    }));
  }}
