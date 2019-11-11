import { Component } from "@angular/core";

@Component({
    selector: 'key-features',
    templateUrl: './keyfeatures.component.html'
})
export class KeyFeaturesComponent {

    features: any[];

    constructor() {
        this.features = [
            {
                "image": "https://img1.wsimg.com/isteam/stock/WVeNQYA/:/cr=t:0%25,l:0%25,w:65.85%25,h:100%25/rs=w:365,h:365,cg:true",
                "title": " Accessibility",
                "desc": "Amexio components support all Accessibility requirements based on ARIA 1.1, WCAG 2.1 and Section 508 Compliance."

            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/114088/:/cr=t:0%25,l:0%25,w:66.94%25,h:100%25/rs=w:365,h:365,cg:true",
                "title": "Layouts",
                "desc": "Amexio Provides the Best in Class Layout support for the Angular Platform. Out of box 10 layouts are supported including CSS3 Grid."

            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/8402/:/cr=t:0%25,l:27.37%25,w:64.23%25,h:100%25/rs=w:365,h:365,cg:true",
                "title": "Forms",
                "desc": "Amexio supports both Template Driven and Reactive Forms with 1 way and 2-way data bindings. With 5.9 release we introduced Creative Forms."

            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/d4YwmOa/:/cr=t:0%25,l:11.32%25,w:81.34%25,h:100%25/rs=w:730,h:730,cg:true",
                "title": " Responsive Design",
                "desc": "Responsive Design for Layouts and Component Structures enabled by default."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/378/:/cr=t:0%25,l:12.67%25,w:69.36%25,h:100%25/rs=w:730,h:730,cg:true",
                "title": " Amexio UI Components",
                "desc": "160+ UI Components with powerful Responsive Layouts & additional 70+ features to enhance the UI. Components are available in 3 Editions – Standard, Enterprise and Creative Editions."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/76021/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
                "title": " Themes",
                "desc": "80+ Material Design themes out of box. Support for gradient header and night mode."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/5zw4Aq8/:/cr=t:0%25,l:4.06%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true",
                "title": " Amexio Charts / D3 Charts",
                "desc": "Charts based on Angular Platform, contains all basic chart types like Pie, Bar, Line, Bubbles etc, with Drillable and Zoomable capabilities."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/2445/:/cr=t:0%25,l:19.13%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true",
                "title": " Amexio Dashboard",
                "desc": "Amexio Dashboard will contain Gauges, Data Point Widgets, Data POint Charts with built-in dashboard templates."
            },
            {
                "image": "https://img1.wsimg.com/isteam/stock/93676/:/cr=t:0%25,l:0%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true",
                "title": "Amexio Maps & Social",
                "desc": " Maps will help you plot your enterprise data on Google Maps. Social Logins enable you to authenticate using FB, Google, LinkedIn, etc"
            }
        ];
    }
}