
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-redme',
  templateUrl: './redme.component.html',
  styleUrls: ['./redme.component.css']
})
export class RedmeComponent implements OnInit {
 Redme:any;

  constructor(private http: HttpClient) { 
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
             this.Redme=redmeResponse.collected.metadata.readme
            // console.log("redmehtml",this.Redme)
            //console.log("redme",redmeResponse.collected.metadata.readme);
         }
    );
    }
  ngOnInit() {
            
    this.getRedme();
           

  }

}
