/**
 * Created by sagar on 11/1/18.
 */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { HTTPService } from '../service/http.service';
import { ThemeServiceService } from '../theme-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'theme-page',
    templateUrl: './theme.component.html'
})
export class ThemeComponent implements OnInit {

    amexioThemeData: any;
    hasThemeInit: boolean = false;
    newThemePath: string;

    constructor(private route: Router, private http: HttpClient, private httpService: HTTPService, private cookieService: CookieService, private themeServiceService: ThemeServiceService) {
    }


    ngOnInit() {
        let response: any;
        this.http.get('https://raw.githubusercontent.com/meta-magic/amexio-api-website/master/api/json/amexio-am.json', { responseType: 'json' }).subscribe(data => {
            response = data;
        }, error => {
        }, () => {
            this.amexioThemeData = response;

        });
    }

    previous() {
        this.route.navigate(['getting-started']);
    }

    next() {
        this.route.navigate(['d3-charts']);
    }


    addNewTheme(newTheme: any, existingTheme: any) {
        let linkEl = document.createElement('link');
        linkEl.onload = () => {
            this.removeExistingTheme(existingTheme);

        };
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.id = 'themeid';
        linkEl.href = newTheme;
        document.head.appendChild(linkEl);
    }

    //removed old theme css
    removeExistingTheme(keyList: any) {
        if (keyList != null && keyList && keyList.length != 0) {
            for (let i = 0; i < keyList.length; i++) {
                let key = keyList[i];
                if (key.id == 'themeid') {
                    document.head.removeChild(key);
                }
            }
        }
    }

    themeChange(theme: any) {
        this.themeServiceService.switchTheme(theme);
    }

}


