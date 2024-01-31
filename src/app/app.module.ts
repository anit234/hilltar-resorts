import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BannerCarouselComponent } from './banner-carousel/banner-carousel.component';
import { RoomsAndSuitsComponent } from './rooms-and-suits/rooms-and-suits.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperNavComponent,
    NavBarComponent,
    MainNavbarComponent,
    BannerCarouselComponent,
    RoomsAndSuitsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
