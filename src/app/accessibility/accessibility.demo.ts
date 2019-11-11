/**
 * Created by ankita on 4/4/19.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AmexioGridLayoutService, GridConfig, GridConstants} from 'amexio-ng-extensions';

@Component({
    selector: 'accesibility-page',
    templateUrl: './accessibility.demo.html',
})
export class AccessibilityDemo implements OnInit {
    htmlCode: string;
    typeScriptCode: string;
    userDefineColorData: any;
    userDefineColors: any;
    sourceData: any;
    copyMsgArray: any[];
    gridDesktop: GridConfig;
    height:string;

    constructor(private http: HttpClient,public router: Router, private _gridlayoutService : AmexioGridLayoutService) {
        this.createLayouts();
    
        // Create the Layouts
        this._gridlayoutService.createLayout(this.gridDesktop);
    }
    ngOnInit() {

    }
    onRowSelect(data:any){
        this.router.navigate([data.link]);
    }

    createLayouts() {
        this.gridDesktop = new GridConfig('LayoutSample', GridConstants.Desktop)
        .addlayout(["gridtable1", "gridtable2", "gridtable7"])
        .addlayout(["gridtable3", "gridtable4", "gridtable7"])
        .addlayout(["gridtable5", "gridtable6", "gridtable7"]);
    }


    previous() {
        this.router.navigate(['d3-charts']);
}
}


