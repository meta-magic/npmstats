import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';

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
 

  constructor() {}

  ngOnInit() { }

  
}