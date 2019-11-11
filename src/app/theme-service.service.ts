import { Injectable } from '@angular/core';
import { HTTPService } from './service/http.service';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  themeColorData = new Rx.BehaviorSubject(null);

  constructor(private _http: HttpClient) {

  }

  loadThemes(url: string){
    return this._http.get(url);
  }

  switchTheme(theme: any) {
    let response: any;
    this._http.get('https://api.amexio.org/api/mda/' + theme.themeJSONFile).subscribe(data => {
      response = data;
    }, error => {
    }, () => {
      let themeColor = response.themeColor;
      let appColor = response.appColor;
      let compColor = response.compColor;
      themeColor.forEach((style: any) => {
        let value = style.value.replace(';', '');
        document.documentElement.style.setProperty(style.key, value);

      });

      appColor.forEach((style: any) => {
        let value = style.value.replace(';', '');
        document.documentElement.style.setProperty(style.key, value);

      });

      compColor.forEach((style: any) => {
        document.documentElement.style.setProperty(style.key, style.value);

      });


    });

    let currentTheme = document.head.querySelectorAll(`link[rel="stylesheet"]`);
    
  }

  getColorCode(themeData: any) {
  this.themeColorData.next(themeData.themeColor);
  }


}
