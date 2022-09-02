import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ChickenComponent } from './chicken/chicken.component';
import { BeefComponent } from './beef/beef.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    ChickenComponent,
    BeefComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
