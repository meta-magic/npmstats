import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
//import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.css']
})


export class PackageSearchComponent implements OnInit {

  @Input() lineChartData:any;
  @Input() showChart:boolean;
  @Input() isLoading:boolean;
  @Input() isLoading1:boolean;
  @Input() monthWiseDataarray:any;
  @Input() yearWiseDataarray:any;
  @Input() showMonthChart:boolean;
  @Input() showYearChart:boolean;
  @Input() totaldownloadcount:number;
  @Input() yearsum:number;
  @Input() monthsum1:number;
  @Input() weeksum:number;
  @Input() currentyearchart:any;
  @Input() range:any;
  @Input() WeekChart:any;
  @Input() QuarterChart:any;
  @Input() fromDate:any;
  @Input() toDate:any;
  @Input() Year:any;
  @Input() week:any;
  constructor() {

  
  }

  ngOnInit() { 


  }

  
}

