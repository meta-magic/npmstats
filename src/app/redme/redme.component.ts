
import { Component, OnInit, Pipe, PipeTransform, ElementRef, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { createElement } from '@angular/core/src/view/element';
import {showdown} from 'showdown';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-redme',
  templateUrl: './redme.component.html',
  styleUrls: ['./redme.component.css'],
 
})
export class RedmeComponent implements OnInit {
 
@Input() html:any;
 
  constructor(private http: HttpClient, public elem: ElementRef ) { 
    
 }

  
  ngOnInit() {
      
  }

}
