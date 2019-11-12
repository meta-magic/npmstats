
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule, DatePipe } from "@angular/common";
import { AmexioEnterpriseModule,AmexioDashBoardModule, AmexioWidgetModule, AmexioChartsModule } from "amexio-ng-extensions";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { RedmeComponent } from './redme/redme.component';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { AmexioChartD3Module } from 'amexio-chart-d3';
import { APP_ROUTE } from 'src/app/app.routes';
import { CookieService } from 'ngx-cookie-service';
import { HTTPService } from './service/http.service';
import { ThemeServiceService } from './theme-service.service';
import { ChartD3Demo } from '../app/chartd3/chard3.demo';
import { AccessibilityDemoModule } from './accessibility/accessibility.demo.module';
import { KeyFeaturesComponent } from './concept/keyfeatures.component';
import { ThemeComponent } from './theme/theme.component';
import { AmexioThemeSwitcherService } from 'amexio-ng-extensions'; // Import Amexio library
import { ConceptPage } from './concept/concept.component';
import { SharedModule } from './shared.module';
import {NpmComponent} from './npm-ui/npm-ui.component';
import {GettingStatedDemo} from './gettingstarted/gettingstarted';

@NgModule({
  declarations: [
    AppComponent,
    PackageSearchComponent,
    RedmeComponent,
    DependenciesComponent,
    ChartD3Demo,
    ConceptPage,
    KeyFeaturesComponent,
    ThemeComponent,
    NpmComponent,
    GettingStatedDemo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AmexioChartD3Module,
    AmexioWidgetModule,
    AmexioChartsModule,
    BrowserModule,
    HttpClientModule,
    AmexioDashBoardModule,
    BrowserAnimationsModule,
    AmexioEnterpriseModule,
    SharedModule,
    AccessibilityDemoModule,
    RouterModule.forRoot(APP_ROUTE, { useHash: true })

  ],
  providers: [HttpClient, DatePipe, CookieService, HTTPService, AmexioThemeSwitcherService, ThemeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
