import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PropertyGridModel } from "amexio-ng-extensions";

@Component({
    selector: 'concept-page',
    templateUrl: './concept.component.html'
})
export class ConceptPage {

    linksData: any[];


    constructor(public router: Router) {
        this.linksData = [];
        this.linksData.push(new PropertyGridModel("Amexio Home", "http://www.amexio.tech", null, false, "http://www.amexio.tech", "http://www.amexio.tech"));
        this.linksData.push(new PropertyGridModel("API", "http://www.amexio.tech", null, false, "http://www.amexio.tech", "http://www.amexio.tech"));
        this.linksData.push(new PropertyGridModel("Brochure", "https://api.amexio.org/AmexioBrochure.pdf ", null, false, "https://api.amexio.org/AmexioBrochure.pdf ", "https://api.amexio.org/AmexioBrochure.pdf "));
        this.linksData.push(new PropertyGridModel("Demo SE", "http://demo.amexio.org/ ", null, false, "http://demo.amexio.org/ ", "http://demo.amexio.org/ "));
        this.linksData.push(new PropertyGridModel("Demo EE", "http://eedemo.amexio.org/ ", null, false, "http://eedemo.amexio.org/ ", "http://eedemo.amexio.org/ "));
        this.linksData.push(new PropertyGridModel("Demo CE", "http://cedemo.amexio.org/ ", null, false, "http://cedemo.amexio.org/ ", "http://cedemo.amexio.org/ "));
        this.linksData.push(new PropertyGridModel("Support", "https://amexio.tech/support", null, false, "https://amexio.tech/support", "https://amexio.tech/support"));
        this.linksData.push(new PropertyGridModel("Quality Assurance", "https://amexio.tech/quality-assurance ", null, false, "https://amexio.tech/quality-assurance ", "https://amexio.tech/quality-assurance "));
        this.linksData.push(new PropertyGridModel("API Training Videos", "https://www.youtube.com/watch?v=zpfpfnOV6Y0&list=PLi505KVOMPrGRUgJF4C3QoXbrhFGEOI4j", null, false, "https://www.youtube.com/watch?v=zpfpfnOV6Y0&list=PLi505KVOMPrGRUgJF4C3QoXbrhFGEOI4j", "https://www.youtube.com/watch?v=zpfpfnOV6Y0&list=PLi505KVOMPrGRUgJF4C3QoXbrhFGEOI4j"));   
          
    }
    previous() {

    }

    next() {
        this.router.navigate(['getting-started']);
    }



    navigate(event: any) {

        if (event.link) {
            window.open(event.link, '_blank');
        }
    }
}