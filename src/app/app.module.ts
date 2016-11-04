/**
 * @category   Module
 * @package    com.kiwity.kw-ng2-gauge.app
 * @author     Salvador Subarroca (subarroca@gmail.com)
**/




// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';




// EXTERNAL




// OWN
import { AppComponent } from './app.component';
import { GaugeModule } from './gauge';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 