
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule, DatePipe} from "@angular/common";
import {AmexioWidgetModule,AmexioChartsModule} from "amexio-ng-extensions";
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {HttpModule} from "@angular/http";
import { RedmeComponent } from './redme/redme.component';


@NgModule({
  declarations: [
      AppComponent,
      PackageSearchComponent,
      RedmeComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    AmexioWidgetModule,
    AmexioChartsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
