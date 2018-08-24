
import { Component, OnInit, Pipe, PipeTransform, ElementRef } from '@angular/core';
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
  encapsulation: ViewEncapsulation.Native,
})
export class RedmeComponent implements OnInit {
 Redme:any;
 html:any;
 urls:string;
 stringArray:any;
  constructor(private http: HttpClient, public elem: ElementRef) { 
    this.stringArray=["ie_/_edge\">","firefox\">","chrome\">","safari\">","opera\">","ios_safari\">","chrome_for_android\">"];
 }

  getRedme() :
  any{
    let redmeResponse: any;
    this.http.get('https://api.npms.io/v2/package/amexio-ng-extensions')
    .subscribe(
    response => {
    redmeResponse = response
    },
    (err: any) => {
    console.log("Unable to connect");
    },
    () => {
      
                  this.urls="godban.github.io/";
                  this.Redme=redmeResponse.collected.metadata.readme;
                  let showdown  = require('showdown'),
                  converter = new showdown.Converter();
                  showdown.setOption('simplifiedAutoLink', true);
                  converter.setFlavor('github');
                  this.html= converter.makeHtml(this.Redme);
                  for(let i=0;i<this.urls.length;i++)
                  {
                        if( this.html.match("godban.github.io/"))
                        {
                            this.html=this.html.replace("godban.github.io/","");
                            this.html=this.html.replace("](http://browsers-support-badges/)","");
                         }
                }

                for(let j=0;j<this.stringArray.length;j++)
                {
                  if( this.html.match(this.stringArray[j]))
                      {
                       this.html=this.html.replace(this.stringArray[j],"");
                      }
                }
         }
    );
    }
  
  ngOnInit() {
            
    this.getRedme();
  }

}
