import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
//import { toDate } from '@angular/common/src/i18n/format_date';

import { AmexioGridLayoutService, GridConfig, GridConstants } from "amexio-ng-extensions";

@Component({
  selector: 'package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.css']
})


export class PackageSearchComponent implements OnInit {

  @Input() lineChartData: any;
  @Input() showChart = false;
  @Input() isLoading: boolean;
  @Input() isLoading1: boolean;
  @Input() monthWiseDataarray: any;
  @Input() yearWiseDataarray: any;
  @Input() showMonthChart: boolean;
  @Input() showYearChart: boolean;
  @Input() totaldownloadcount: number;
  @Input() yearsum: number;
  @Input() monthsum1: number;
  @Input() weeksum: number;
  @Input() currentyearchart: any;
  @Input() range: any;
  @Input() WeekChart: any;
  @Input() QuarterChart: any;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() Year: any;
  @Input() week: any;


  gridDesktop: GridConfig;
  gridTablet: GridConfig;
  gridMobile: GridConfig;


  constructor(private _gridlayoutService: AmexioGridLayoutService) {
    this.createLayouts();

    // Create the Layouts
    this._gridlayoutService.createLayout(this.gridDesktop);
    this._gridlayoutService.createLayout(this.gridTablet);
    this._gridlayoutService.createLayout(this.gridMobile);


  }

  ngOnInit() { }
  createLayouts() {
    this.gridDesktop = new GridConfig('chartLayout', GridConstants.Desktop)
      .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader2", "gridheader2", "gridheader2", "gridheader3", "gridheader3", "gridheader3", "gridheader4", "gridheader4", "gridheader4"])
      .addlayout([ "gridchart4", "gridchart4", "gridchart4", "gridchart4", "gridchart2", "gridchart2", "gridchart2", "gridchart2","gridchart5", "gridchart5", "gridchart5", "gridchart5"])
      .addlayout(["gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart3", "gridchart3", "gridchart3", "gridchart3"]);


    this.gridTablet = new GridConfig('chartLayout', GridConstants.Tablet)
      .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1", "gridheader1", "gridheader1", "gridheader2", "gridheader2", "gridheader2", "gridheader2", "gridheader2", "gridheader2"])
      .addlayout(["gridheader3", "gridheader3", "gridheader3", "gridheader3", "gridheader3", "gridheader3", "gridheader4", "gridheader4", "gridheader4", "gridheader4", "gridheader4", "gridheader4"])


      .addlayout([ "gridchart4", "gridchart4", "gridchart4", "gridchart4", "gridchart4", "gridchart4",   "gridchart5", "gridchart5", "gridchart5", "gridchart5", "gridchart5", "gridchart5",])
      .addlayout(["gridchart2", "gridchart2", "gridchart2", "gridchart2", "gridchart2", "gridchart2",   "gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3",])
      .addlayout(["gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1",  "gridchart1", "gridchart1"])


    this.gridMobile = new GridConfig('chartLayout', GridConstants.Mobile)
      .addlayout(["gridheader1", "gridheader1", "gridheader1", "gridheader1",   "gridheader1", "gridheader1", "gridheader1", "gridheader1",     "gridheader1", "gridheader1", "gridheader1", "gridheader1"])
      .addlayout(["gridheader2", "gridheader2", "gridheader2", "gridheader2",     "gridheader2", "gridheader2", "gridheader2", "gridheader2",     "gridheader2", "gridheader2", "gridheader2", "gridheader2"])
      .addlayout(["gridheader3", "gridheader3", "gridheader3", "gridheader3",      "gridheader3", "gridheader3", "gridheader3", "gridheader3",     "gridheader3", "gridheader3", "gridheader3", "gridheader3"])
      .addlayout(["gridheader4", "gridheader4", "gridheader4", "gridheader4",       "gridheader4", "gridheader4", "gridheader4", "gridheader4",     "gridheader4", "gridheader4", "gridheader4", "gridheader4"])

      .addlayout(["gridchart4", "gridchart4", "gridchart4", "gridchart4", "gridchart4", "gridchart4", "gridchart4", "gridchart4", "gridchart4", "gridchart4", "gridchart4", "gridchart4"])
      .addlayout(["gridchart5", "gridchart5", "gridchart5", "gridchart5", "gridchart5", "gridchart5", "gridchart5", "gridchart5", "gridchart5", "gridchart5", "gridchart5", "gridchart5"])
      .addlayout(["gridchart2", "gridchart2", "gridchart2", "gridchart2", "gridchart2", "gridchart2", "gridchart2", "gridchart2", "gridchart2", "gridchart2", "gridchart2", "gridchart2"])
      .addlayout(["gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1", "gridchart1",  "gridchart1", "gridchart1"])
      .addlayout(["gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3", "gridchart3"])
     


  }
}

