import { Component, Input, Renderer2, ElementRef, AfterViewInit, NgModule, ModuleWithProviders } from '@angular/core';
declare var Prism: any;
import { CommonModule, TitleCasePipe } from "@angular/common";
/* Import prism core */
import 'prismjs/prism';

/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';
// import { AmexioApiReferenceComponent } from 'amexio-ng-extensions';
// import { AmexioStructureComponent } from "./amexioStructureDemo/amexiostructure/amexiostructure.component";
// import { AmexioApiDemoComponent } from "./amexioStructureDemo/apiDemo/amexioapidemo.component";
// import { AmexioApiInfoComponent } from "./amexioStructureDemo/apiInfo/amexioapiinfo.component";
// import { AmexioApiSourceCodeComponent } from "./amexioStructureDemo/apiSourceCode/apisourcecode.component";
// import { AmexioApiLiveDemoComponent } from "./amexioStructureDemo/apiLiveDemo/apilivedemo.component";
// import { AmexioApiAccessibleComponent } from "./amexioStructureDemo/apiAccessbility/amexioapiaccessible.component"
import { AmexioWidgetModule, AmexioEnterpriseModule } from 'amexio-ng-extensions';
// import { RestCallService } from "amexio-ng-extensions";
import { HttpClientModule } from "@angular/common/http";

// import { CalendarDemoComponent1 } from './enterprise/calendar-demo-1/calendar.demo.component';
// import { floatingPanelCalendarComponent } from './enterprise/floating-panel-calendar/floatingpanelcalendar.component';


@Component({
  selector: 'prism-block',
  template: ``,
})
export class PrismComponent implements AfterViewInit {
  @Input() code: string;
  @Input() language: string;
  private preNode: Node;
  private codeNode: Node;
  private nativeElement: Node;
  ngAfterViewInit() {
    this.preNode = this._renderer.createElement('pre');
    this.codeNode = this._renderer.createElement('code');
    this._renderer.addClass(this.codeNode, 'language-' + this.language);
    this._renderer.appendChild(this.nativeElement, this.preNode);
    this._renderer.appendChild(this.preNode, this.codeNode);
    this.codeNode.textContent = this.code;
    Prism.highlightElement(this.codeNode);
  }
  constructor(private _renderer: Renderer2, private _el: ElementRef) {
    this.nativeElement = _el.nativeElement;

  }
}

@NgModule({
  imports: [CommonModule, AmexioWidgetModule, AmexioEnterpriseModule, HttpClientModule],
  exports: [PrismComponent, 
    // AmexioApiInfoComponent, AmexioApiAccessibleComponent, AmexioApiReferenceComponent,floatingPanelCalendarComponent,
    // AmexioApiLiveDemoComponent, AmexioApiSourceCodeComponent, AmexioStructureComponent, AmexioApiDemoComponent
  ],
  declarations: [PrismComponent,
    //  AmexioApiInfoComponent, AmexioApiAccessibleComponent,floatingPanelCalendarComponent,
    // AmexioApiReferenceComponent, AmexioApiLiveDemoComponent, AmexioApiSourceCodeComponent, AmexioStructureComponent, AmexioApiDemoComponent
  ],

})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [TitleCasePipe],
    };
  }
}
