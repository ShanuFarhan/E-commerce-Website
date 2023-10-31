import { Component } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Addtocart';
  Products:any=[]
  constructor(private getApi:ApiCallService){}
  ngOnInit(){

    this.getApi.getPost().subscribe((res)=>{
      console.log(res);
      this.Products=res
    })
  }
  }

