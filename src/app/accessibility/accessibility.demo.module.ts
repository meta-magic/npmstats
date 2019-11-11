import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AmexioWidgetModule } from "amexio-ng-extensions";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
// import { SharedModule } from "";
import { HttpClientModule } from "@angular/common/http";
import {AccessibilityDemo} from "./accessibility.demo";


/**
 * Created by ankita on 12/04/19.
 */
@NgModule({
  declarations: [AccessibilityDemo],
  imports: [CommonModule, FormsModule, HttpClientModule, AmexioWidgetModule, RouterModule.forChild([{
    path: 'accessibility', component: AccessibilityDemo, pathMatch: 'full'
  }])],
  providers: []
})
export class AccessibilityDemoModule {

}
