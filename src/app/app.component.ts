import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AmexioTabComponent } from 'amexio-ng-extensions';
import { AmexioGridLayoutService, GridConfig, GridConstants} from "amexio-ng-extensions";
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { ThemeServiceService } from './theme-service.service';
import { CookieService } from "ngx-cookie-service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  amexiotechmenus: any;
  mdThemeData: any[] = [];

constructor(   private _cookieService: CookieService,private _httpClient: HttpClient,public router: Router,private themeServiceService: ThemeServiceService) {

    this.amexiotechmenus = [
      {
        "text": "Amexio API",
        "icon": "fa fa-empire fa-fw",
        "submenus": [
          {
            "text": "Concept",
            "routeLink": true,
            "link": "concept"
          },
          {
            "text": "Getting Started",
            "routeLink": true,
            "link": "getting-started"
          },
          {
            "text": "Colors (Themes)",
            "routeLink": true,
            "link": "theme",
            "separator": true
          },
          {
            "text": "D3 Charts",
            "routeLink": true,
            "link": "d3-charts"
          },
          {
            "text": "Accessibility",
            "routeLink": true,
            "link": "accessibility",
            "separator": true
          },
          {
            "text": "Quality Assurance",
            "routeLink": false,
            "link": "https://amexio.tech/quality-assurance"
          },
          {
            "text": "Support",
            "routeLink": false,
            "link": "https://amexio.tech/support"
          },
          {
            "text": "API Docs",
            "routeLink": false,
            "link": "http://api.amexio.org/",
            "separator": true
          }
        ]
      },
      {
        "text": "Products",
        "icon": "fa fa-snowflake-o fa-fw",
        "submenus": [
          {
            "text": "Amexio API",
            "routeLink": false,
            "link": "https://amexio.tech/amexio-api"
          },
          {
            "text": "Amexio D3 Charts",
            "routeLink": false,
            "link": " https://amexio.tech/amexio-d3-charts"
          },
          {
            "text": "Amexio Canvas",
            "routeLink": false,
            "link": "https://amexio.tech/amexio-canvas"
          },
          {
            "text": "Amexio Colors",
            "routeLink": false,
            "link": "https://amexio.tech/amexio-colors"
          },
          {
            "text": "Amexio Plugins",
            "routeLink": false,
            "link": "https://amexio.tech/amexio-plugins-1"
          },
          {
            "text": "Amexio Demo Apps",
            "routeLink": false,
            "link": "http://demo.amexio.tech/"
          }
        ]
      },
      {
        "text": "Start Using",
        "icon": "fa fa-television fa-fw",
        "submenus": [
          {
            "text": "Roadmap",
            "routeLink": false,
            "link": "https://amexio.tech/roadmap"
          },
          
          {
            "text": "Pricing",
            "routeLink": false,
            "link": "https://amexio.tech/pricing"
          },
         
          {
            "text": "Downloads",
            "routeLink": false,
            "link": "https://amexio.tech/download"
          },
          {
            "text": "License and Other Docs",
            "routeLink": false,
            "link": "https://amexio.tech/license-and-other-docs-1"
          },
          {
            "text": "Canvas Login (Beta)",
            "routeLink": false,
            "link": "https://canvas.amexio.org/"
          },
          {
            "text": "Subscribe ",
            "routeLink": false,
            "link": "https://canvas.amexio.org/#/user/signup"
          }
        ]
      },
      {
        "text": "Training",
        "icon": "fa fa-user fa-fw",
        "submenus": [
          {
            "text": "Component Example",
            "routeLink": false,
            "link": "http://demo.amexio.tech/"
          },
          {
            "text": "Amexio Training",
            "routeLink": false,
            "link": "http://metaarivu.com/amexio-training"
          }
        ]
      },
      {
        "text": "Case Studies",
        "icon": "fa fa-clone fa-fw",
        "submenus": [
          {
            "text": "Showcase",
            "routeLink": false,
            "link": "https://showcase.amexio.org/#/landingPage-app"
          },
          {
            "text": "Traffic Analysis",
            "routeLink": false,
            "link": "https://eedemo.amexio.org/#/home/dashboard",
            "separator": true,
            "separatorHeader": "Enterprise Edition Apps"
          },
          {
            "text": "City Analysis",
            "routeLink": false,
            "link": "https://eedemo.amexio.org/#/home/dashboardtwo"
          },
          {
            "text": "Creative Home Page",
            "routeLink": false,
            "link": "https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/ce-demo-app",
            "separator": true,
            "separatorHeader": "Creative Edition Apps"
          },
          {
            "text": "Movie Portal",
            "routeLink": false,
            "link": "https://cedemo.amexio.org/Virtual-Scroller/#/sc"
          },
          {
            "text": "TecMFlix",
            "routeLink": false,
            "link": "https://cedemo.amexio.org/tecmflix/"
          },
          {
            "text": "Components App",
            "routeLink": false,
            "link": "https://demo.amexio.org/se/v5.12/index.html#/home",
            "separator": true,
            "separatorHeader": "Standard Edition Apps"
          },
          {
            "text": "Insurance Portal",
            "routeLink": false,
            "link": "https://sedemo.amexio.org/se/insuranceportal/#/home"
          },
          {
            "text": "Shopping Portal",
            "routeLink": false,
            "link": "https://sedemo.amexio.org/se/shoppingportal/#/home"
          },
          {
            "text": "US Election Results",
            "routeLink": false,
            "link": "https://sedemo.amexio.org/se/us-election/ "
          },
          {
            "text": "NpmStats",
            "routeLink": false,
            "link": "https://www.npmstats.com/"
          }
        ]
      },
      {
        "text": "Engage",
        "submenus": [
          {
            "text": "Events",
            "routeLink": false,
            "link": "https://metamagicglobal.com/events"
          },
          {
            "text": "Forums",
            "routeLink": false,
            "link": "http://forum.metamagicglobal.com/"
          },
          {
            "text": "Blogs",
            "routeLink": false,
            "link": "http://blog.metamagicglobal.com/"
          },
          {
            "text": "Node Package Manager",
            "routeLink": false,
            "link": "https://www.npmjs.com/package/amexio-ng-extensions"
          },
          {
            "text": "GitHub - Source Code",
            "routeLink": false,
            "link": "https://github.com/meta-magic/amexio.github.io"
          }
        ]
      },
      {
        "text": "About Us",
        "submenus": [
          {
            "text": "Contact",
            "routeLink": false,
            "link": "https://metamagicglobal.com/contact"
          },
          {
            "text": "Company",
            "routeLink": false,
            "link": "http://www.metamagicglobal.com/company"
          },
          {
            "text": "MetaMagic",
            "routeLink": false,
            "link": "https://www.metamagicglobal.com/"
          }
        ]
      }
    ];
  }
  ngOnInit() {
    this.changeTheme();
  }
  externalLink(event: any) {
    if (event.data.link && event.data.routeLink == false) {
      //this.document.location.href=event.data.node.link;
      window.open(event.data.link, '_blank');
    }
    if (event.data.link && event.data.routeLink == true) {
      this.router.navigate([event.data.link]);
    }

  }
  titleClick() {
    this.router.navigate(['npm-ui']);
  }
  themeClick(event: any) {
    this.themeServiceService.getColorCode(event);
  } 
  changeTheme() {
    this._httpClient.get('assets/data/material-themes.json').subscribe((res: any) => {
      this.mdThemeData = res.bestThemes;
    },
      (error: any) => {
        console.log(error)
      },
      () => {
        let themeRef: any;
        let themeId = 1;
        if (this._cookieService.check('theme-info')) {
          themeId = JSON.parse(this._cookieService.get('theme-info')).id + 1;
          themeId = this.mdThemeData.length - 1 < themeId ? 0 : themeId;
          themeRef = this.mdThemeData[themeId];
        } else {
          themeId = 0;
          themeRef = this.mdThemeData[0];
        }
        this._cookieService.set('theme-info', JSON.stringify({ id: themeId, themeName: themeRef.themeCssFile }));
        this.themeServiceService.switchTheme(themeRef);
      });
  }
}

