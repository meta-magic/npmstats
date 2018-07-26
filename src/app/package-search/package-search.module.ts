import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AmexioWidgetModule,AmexioChartsModule} from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PackageSearchComponent } from './package-search.component';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [PackageSearchComponent],
    imports: [CommonModule, BrowserModule, FormsModule,AmexioChartsModule, HttpClientModule, AmexioWidgetModule, RouterModule.forChild([{
        path: '', component: PackageSearchComponent, pathMatch: 'full'
    }])],
    providers: [HttpClientModule,HttpClient]
    
})
export class PackageSearchModule {



}