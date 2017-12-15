import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { PaginationComponent } from './restaurants/pagination/pagination.component';
import { PriceComponent } from './restaurants/price/price.component';
import { RatingComponent } from './restaurants/rating/rating.component';
import { RestaurantItemComponent } from './restaurants/restaurant-item/restaurant-item.component';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';
import { RestaurantsModalComponent } from './restaurants/restaurants-modal/restaurants-modal.component';

import { RestaurantsService } from './restaurants/services/restaurants.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SidebarComponent,
    RestaurantsComponent,
    PaginationComponent,
    PriceComponent,
    RatingComponent,
    RestaurantItemComponent,
    RestaurantListComponent,
    RestaurantsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [RestaurantsModalComponent],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
