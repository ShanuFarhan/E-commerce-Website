import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsReducer } from './store/reducers/products.reducer';
import { ProductsEffects } from './store/products/products.effects';
import { ProductService } from './services/product.service';
import { CardsComponent } from './Components/cards/cards.component';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [AppComponent, CardsComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot({ products: productsReducer }),
    EffectsModule.forRoot([ProductsEffects]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(ngRedux: NgRedux<any>, private productsActions: ProductActions) {
  //   ngRedux.configureStore(rootReducer, {});
  //   productsActions.fetchProduct();
  // }
}
