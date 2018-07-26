(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row>\n           \n\n\n\n\n\n\n\n\n\n</amexio-row>\n<app-package-search></app-package-search>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _package_search_package_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package-search/package-search.component */ "./src/app/package-search/package-search.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _redme_redme_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redme/redme.component */ "./src/app/redme/redme.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                _package_search_package_search_component__WEBPACK_IMPORTED_MODULE_2__["PackageSearchComponent"],
                _redme_redme_component__WEBPACK_IMPORTED_MODULE_9__["RedmeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_6__["AmexioChartsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/package-search/package-search.component.css":
/*!*************************************************************!*\
  !*** ./src/app/package-search/package-search.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardht {\n    height: 400px;\n}\n\n.signal {\n    border: 5px solid #333;\n    border-radius: 30px;\n    height: 30px;\n    left: 50%;\n    margin: -15px 0 0 -15px;\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    width: 30px;\n \n    -webkit-animation: pulsate 1s ease-out;\n \n            animation: pulsate 1s ease-out;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes pulsate {\n    0% {\n      -webkit-transform: scale(.1);\n              transform: scale(.1);\n      opacity: 0.0;\n    }\n    50% {\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2);\n      opacity: 0;\n    }\n}\n\n@keyframes pulsate {\n    0% {\n      -webkit-transform: scale(.1);\n              transform: scale(.1);\n      opacity: 0.0;\n    }\n    50% {\n      opacity: 1;\n    }\n    100% {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2);\n      opacity: 0;\n    }\n}"

/***/ }),

/***/ "./src/app/package-search/package-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/package-search/package-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<amexio-card [header]=\"true\"\n[header-align]=\"'left'\"\n[footer]=\"false\"\n[footer-align]=\"'right'\"\n[body-height]=\"95\"\n>\n  <amexio-header>\n    NPM Stats\n  </amexio-header>\n  <amexio-body>\n    <amexio-row>\n      <amexio-column [size]=\"3\">\n       <amexio-text-input [min-length]=\"1\" [max-length]=\"100\" [allow-blank]=\"false\" field-label=\"Package Name\" name=\"packagename\"\n             place-holder=\"Enter Package Name\" field-name=\"amexio-ng-extensions\" icon-feedback=\"false\" [(ngModel)]=packageModel.packageName>\n       </amexio-text-input>\n      </amexio-column>\n\n\n      <amexio-column [size]=\"3\">\n         <amexio-date-time-picker [dropdown-datepicker]=\"true\" [field-label]=\"'From date'\" [time-picker]=\"false\" [date-picker]=\"true\"\n              [(ngModel)]=\"packageModel.fromDate\">\n        </amexio-date-time-picker>\n      </amexio-column>\n\n\n\n      <amexio-column [size]=\"3\">\n         <amexio-date-time-picker [dropdown-datepicker]=\"true\" [field-label]=\"'To date'\" [time-picker]=\"false\" [date-picker]=\"true\"\n           (change)=\"getDateError\"  [(ngModel)]=\" packageModel.toDate\">\n         </amexio-date-time-picker>\n      </amexio-column>\n\n       <amexio-column size=\"1\"></amexio-column>\n      \n       <span >\n       <amexio-column size=\"2\">\n           <amexio-button [disabled]=\"false\" [label]=\"'Search'\" [form-bind]=\"'validateForm '\"[type]=\"'green'\" [tooltip]=\"'Search'\" (onClick)=\" getData()\" >\n          </amexio-button>\n      </amexio-column>\n      </span>\n</amexio-row>\n\n<amexio-row>\n   <ng-container *ngIf=\"showChart\">\n        <amexio-label size=\"medium\" >Total downloads:{{sum}}</amexio-label>\n   </ng-container>\n</amexio-row>\n\n<amexio-row>\n     <amexio-column size=\"10\">\n        <ng-container *ngIf=\"isLoading1\">\n        <amexio-card [height]=\"400\">\n          <amexio-body>\n              <div [ngClass]=\"{'signal':isLoading}\">\n                  <ng-container *ngIf=\"showChart\" >\n                      <amexio-chart-line [data]=\"lineChartData\" [height]=\"'400px'\" [width]=\"'100%'\">\n                        <amexio-chart-legend [position]=\"'top'\" [font-name]=\"'downloads'\"></amexio-chart-legend>\n                            <amexio-chart-horizontal-axis [title]=\"'Date'\">\n                            </amexio-chart-horizontal-axis>\n                            <amexio-chart-vertical-axis [title]=\"'Downloads'\">\n                            </amexio-chart-vertical-axis>\n                      </amexio-chart-line> \n                  </ng-container>\n                </div>          \n          </amexio-body>\n        </amexio-card>\n      </ng-container>\n       </amexio-column> \n</amexio-row>\n<amexio-notification\n         [data]=\"errorMessage\"\n         [vertical-position]=\"'top'\"\n         [horizontal-position]=\"'center'\"\n         [close-on-escape] =\"true\"\n         [background-color]=\"'orange '\"\n         [foreground-color]=\"'black'\"\n         [auto-dismiss-msg-interval]=\"6000\"\n         [close-on-escape]=\"true\"\n         [auto-dismiss-msg]=\"true\">\n  </amexio-notification>\n</amexio-body>\n\n</amexio-card>"

/***/ }),

/***/ "./src/app/package-search/package-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/package-search/package-search.component.ts ***!
  \************************************************************/
/*! exports provided: PackageSearchComponent, PackageModel, DayWiseDownloadCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageSearchComponent", function() { return PackageSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageModel", function() { return PackageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayWiseDownloadCount", function() { return DayWiseDownloadCount; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackageSearchComponent = /** @class */ (function () {
    function PackageSearchComponent(http) {
        this.http = http;
        this.other = [];
        this.array = [];
        this.downloads = [];
        this.errorMessage = [];
        this.isLoading = false;
        this.sum = 0;
        this.packageModel = new PackageModel();
    }
    PackageSearchComponent.prototype.ngOnInit = function () {
    };
    PackageSearchComponent.prototype.validatePackageName = function () {
        if (this.packageModel.packageName == null || this.packageModel.packageName === '') {
            this.packageModel.packageName = "amexio-ng-extensions";
        }
    };
    PackageSearchComponent.prototype.getData = function () {
        var _this = this;
        this.sum = 0;
        this.showChart = false;
        this.isLoading1 = true;
        this.isLoading = true;
        this.errorMessage = [];
        this.validatePackageName();
        this.lineChartData = [];
        var inputUrl;
        this.convertFromDate(this.packageModel.fromDate);
        this.convertToDate(this.packageModel.toDate);
        inputUrl = this.convertfromdate + ':' + this.converttodate + '/' + this.packageModel.packageName;
        var response;
        this.http.get('https://api.npmjs.org/downloads/range/' + inputUrl, {}).subscribe(function (resp) {
            response = resp;
            _this.showChart = true;
        }, function (error) {
            console.log("GOT ERROR", JSON.stringify(error.error.error));
            _this.showChart = false;
            if (JSON.stringify(error.error.error) == '"end date > start date"') {
                _this.errorMessage.push("To-Date should be greater than From-Date");
            }
            else if (JSON.stringify(error.error.error) == '"invalid date"') {
                _this.errorMessage.push("Enter Valid Date");
            }
            else {
                _this.errorMessage.push(JSON.stringify(error.error.error));
            }
            _this.isLoading = false;
            _this.isLoading1 = false;
        }, function () {
            _this.downloadDataArray = response.downloads;
            _this.lineChartData.push([
                { "datatype": "string", "label": 'Date' },
                { "datatype": "number", "label": 'Downloads' }
            ]);
            _this.downloadDataArray.forEach(function (downLoadObj) {
                var dayWiseDownloadCount;
                dayWiseDownloadCount = new DayWiseDownloadCount(downLoadObj.day, downLoadObj.downloads);
                var totaldownload;
                totaldownload = dayWiseDownloadCount.downloads;
                _this.sum = _this.sum + totaldownload;
                _this.lineChartData.push(dayWiseDownloadCount.add());
            });
            _this.showChart = true;
            _this.isLoading = false;
            var totalCount = _this.sum;
        });
    };
    PackageSearchComponent.prototype.convertFromDate = function (str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        this.convertfromdate = [date.getFullYear(), mnth, day].join("-");
    };
    PackageSearchComponent.prototype.convertToDate = function (str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        this.converttodate = [date.getFullYear(), mnth, day].join("-");
    };
    PackageSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-package-search',
            template: __webpack_require__(/*! ./package-search.component.html */ "./src/app/package-search/package-search.component.html"),
            styles: [__webpack_require__(/*! ./package-search.component.css */ "./src/app/package-search/package-search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PackageSearchComponent);
    return PackageSearchComponent;
}());

var PackageModel = /** @class */ (function () {
    function PackageModel() {
        this.packageName = '';
        this.fromDate = '';
        this.toDate = '';
    }
    return PackageModel;
}());

var DayWiseDownloadCount = /** @class */ (function () {
    function DayWiseDownloadCount(day, downloads) {
        this.total = 0;
        this.day = day;
        this.downloads = downloads;
    }
    DayWiseDownloadCount.prototype.add = function () {
        return [
            this.day,
            this.downloads
        ];
    };
    return DayWiseDownloadCount;
}());



/***/ }),

/***/ "./src/app/redme/redme.component.css":
/*!*******************************************!*\
  !*** ./src/app/redme/redme.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/redme/redme.component.html":
/*!********************************************!*\
  !*** ./src/app/redme/redme.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{Redme}}"

/***/ }),

/***/ "./src/app/redme/redme.component.ts":
/*!******************************************!*\
  !*** ./src/app/redme/redme.component.ts ***!
  \******************************************/
/*! exports provided: RedmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedmeComponent", function() { return RedmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedmeComponent = /** @class */ (function () {
    function RedmeComponent(http) {
        this.http = http;
    }
    RedmeComponent.prototype.getRedme = function () {
        var _this = this;
        var redmeResponse;
        this.http.get('https://api.npms.io/v2/package/amexio-ng-extensions')
            .subscribe(function (response) {
            redmeResponse = response;
        }, function (err) {
            console.log("Unable to connect");
        }, function () {
            _this.Redme = redmeResponse.collected.metadata.readme;
            // console.log("redmehtml",this.Redme)
            //console.log("redme",redmeResponse.collected.metadata.readme);
        });
    };
    RedmeComponent.prototype.ngOnInit = function () {
        this.getRedme();
    };
    RedmeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redme',
            template: __webpack_require__(/*! ./redme.component.html */ "./src/app/redme/redme.component.html"),
            styles: [__webpack_require__(/*! ./redme.component.css */ "./src/app/redme/redme.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RedmeComponent);
    return RedmeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/deepali/npm/npm-stats/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map