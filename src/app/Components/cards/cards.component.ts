import { Component,Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchProducts } from '../../store/actions/products.action';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  count:number=0
  showCounter: boolean = false;
  products$: Observable<any>;
 
  constructor(private store: Store<{products:any}>) {
    this.products$ = this.store.select((state) => state.products.data);
    this.store.dispatch(fetchProducts());
  }
  
  handleIncrease(){
    this.count++;

  }
  handleDecrease(){
    if(this.count>0)
      this.count--;
  }
}
