import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './client/header/header.component';
import { SearchComponent } from './client/searchBar/searchBar.component';
import { HomeComponent } from './client/home/home.component';
import { SideBarComponent } from './client/sideBar/sideBar.component';
import { SideButtonComponent } from './client/sideButtons/sideButtons.component';
import { CardComponent } from './client/card/card.component';
import { ButtonTemplateComponent } from './client/button/button.component';
import { ScrollComponent } from './client/scroll/scroll.component';
import { MiniCardComponent } from './client/mini-card/mini-card.component';
import { RoundCardComponent } from './client/round-card/round-card.component';
import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/signup/signup.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HomeComponent,
    SideBarComponent,
    SideButtonComponent,
    CardComponent,
    ButtonTemplateComponent,
    ScrollComponent,
    MiniCardComponent,
    RoundCardComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
