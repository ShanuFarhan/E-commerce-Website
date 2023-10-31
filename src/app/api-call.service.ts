import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }
  getPost(){
    return this.http.get<any>('https://653fb25a9e8bd3be29e1100e.mockapi.io/addtocart/products')
  }
}
