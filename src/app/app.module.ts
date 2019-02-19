
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule, DatePipe} from "@angular/common";
import {AmexioDashBoardModule,AmexioWidgetModule,AmexioChartsModule} from "amexio-ng-extensions";
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {HttpModule} from "@angular/http";
import { RedmeComponent } from './redme/redme.component';
import { DependenciesComponent } from './dependencies/dependencies.component';

import { AmexioChartD3Module } from 'amexio-chart-d3';


@NgModule({
  declarations: [
      AppComponent,
      PackageSearchComponent,
      RedmeComponent,
      DependenciesComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AmexioChartD3Module,
    RouterModule,
    AmexioWidgetModule,
    AmexioChartsModule,
    BrowserModule,
    HttpClientModule,
    AmexioDashBoardModule,
    BrowserAnimationsModule

  ],
  providers: [HttpClient,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
