import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AmexioWidgetModule,AmexioChartsModule} from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RedmeComponent } from './redme.component';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';


@NgModule({
    declarations: [RedmeComponent],
    imports: [CommonModule, BrowserModule, FormsModule,AmexioChartsModule, HttpClientModule, AmexioWidgetModule, RouterModule.forChild([{
        path: '', component:RedmeComponent, pathMatch: 'full'
    }])],
    providers: [HttpClientModule,HttpClient]
    
})

export class RedmeModule {



}