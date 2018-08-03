import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  currentDate: any;
  convertfromdate: any;
  converttodate: any;
  monthWiseDataarray:any;
  lineChartData: any;
  lineChartData1: any;
  fromdate: any;
  todate: any;
  packagename: any;
  downloadDataArray: any;
  obj={};
  other = [];
  array: any = [];
  downloads = [];
  disabledDate: any[];
  errorMessage: any = [];
  showChart: boolean;
  showMonthChart:boolean;
  isLoading: boolean = false;
  showflag: boolean;
  package: string;
  sum: number = 0;
  isLoading1: boolean;
  activeTab: boolean;
  perdaydownload: any;
  monthrange:any;
  totalDays: any;
  data: any;
  packageModel: PackageModel;
  monthwisedata: any;
  monthsum:any;

  constructor(private http: HttpClient) {
    this.packageModel = new PackageModel();
    this.packageModel.packageName = "amexio-ng-extensions";
    this.packageModel.fromDate = "Jun 1, 2017";
    this.packageModel.toDate = new Date().toString();
   
  
   
  }

  ngOnInit() {
    this.getData();
   
  }
 
  d = new Date();

  //THIS METHOD IS USED FOR GET THE DATA FROM SERVICE AND CREATE CHART JSON 
  getData() {
    this.sum = 0;
    this.showChart = false;
    this.showMonthChart=false;
    this.isLoading = true;
    this.isLoading1 = true;
    this.errorMessage = [];
    this.validatePackageName();
    this.lineChartData = [];
    this.monthWiseDataarray=[];
    this.monthwisedata=[];
    let inputUrl: any;
    this.convertFromDate(this.packageModel.fromDate);
    this.convertToDate(this.packageModel.toDate);

    inputUrl = this.convertfromdate + ':' + this.converttodate + '/' + this.packageModel.packageName
    this.perdaydownload = this.packageModel.packageName + ' ' + ':' + ' ' + this.convertfromdate + ' ' + 'to' + ' ' + this.converttodate
    let response: any;
    this.http.get('https://api.npmjs.org/downloads/range/' + inputUrl, {}).subscribe(
      resp => {
        response = resp;
        this.showChart = true;

      },
      error => {

        console.log("GOT ERROR", JSON.stringify(error.error.error));
        this.showChart = false;
        if (JSON.stringify(error.error.error) == '"end date > start date"') {
          this.errorMessage.push("To-Date should be greater than From-Date")
        } else if (JSON.stringify(error.error.error) == '"invalid date"') {
          this.errorMessage.push("Enter Valid Date");
        } else {
          this.errorMessage.push(JSON.stringify(error.error.error));

        }
        this.isLoading = false;
        this.isLoading1 = false;
      },
      () => {


        this.downloadDataArray = response.downloads;

        this.lineChartData.push([
          { "datatype": "string", "label": 'Date' },
          { "datatype": "number", "label":this.perdaydownload }
        ]);

        this.monthWiseDataarray.push([
          { "datatype": "string", "label": 'Months' },
          { "datatype": "number", "label":this.perdaydownload }
        ]);




        this.downloadDataArray.forEach((downLoadObj: any) => {
          let dayWiseDownloadCount: any;
          dayWiseDownloadCount = new DayWiseDownloadCount(downLoadObj.day, downLoadObj.downloads);

          let totaldownload: any;
          totaldownload = dayWiseDownloadCount.downloads;
          this.sum = this.sum + totaldownload;
          this.lineChartData.push(dayWiseDownloadCount.add());
        });

           let monthwisedata: MonthWiseDownload;
           monthwisedata = new MonthWiseDownload();
           this.downloadDataArray.forEach((objects: any) => {
           monthwisedata.groupData(objects.day, objects.downloads);
               
        });
       
        let month=[];
        for (const key in monthwisedata.monthwise) {
          if (monthwisedata.monthwise.hasOwnProperty(key)) {
             const element = monthwisedata.monthwise[key];
               let obj=[];
               
               month.push(key);
               obj.push(key);

               obj.push(element);
               this.monthWiseDataarray.push(obj);
             
               
            
              

        }
            

        }    
        
            let firstmonth=month[0];
            let lastmonth=month[month.length-1];
            this.monthrange = this.packageModel.packageName + ' ' + ':' + firstmonth + ' ' + 'to' + ' ' +lastmonth
            this.showChart = true;
            this.showMonthChart=true;
            this.isLoading = false;

      }
    );

    this.activeTab = true;
  }




  validatePackageName() {
    if (this.packageModel.packageName == null || this.packageModel.packageName === '') {
      this.packageModel.packageName = "amexio-ng-extensions"
    }

  }
  onLinkClick(link: string) {
    window.open(link, '_blank');
  }


  convertFromDate(str: any) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    this.convertfromdate = [date.getFullYear(), mnth, day].join("-");


  }

  convertToDate(str: any) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    this.converttodate = [date.getFullYear(), mnth, day].join("-");

  }
}

export class PackageModel {
  fromDate: string = '';
  toDate: any = '';
  packageName: any = '';
}

export class TotalDays {
  day: string;
  constructor(day: string) {
    this.day = day;
  }
}

export class DayWiseDownloadCount {
  downloads: string;
  day: number;
  total = 0;


  constructor(day: number, downloads: string) {
    this.day = day;
    this.downloads = downloads;
  }

  add(): any[] {
   
    return [
      this.day,
      this.downloads
    ];
  }
}

export class MonthWiseDownload {

  monthwise: number[];
  constructor() {
    this.monthwise = [];
   
  }

  getMonthYear(day: string) {
    const date = new Date(day);
    const mnth = ("0" + (date.getMonth() + 1)).slice(-2);
    return [date.getFullYear(), mnth].join("-");
  }

  groupData(key: string, count: number): any {

    const monthkey = this.getMonthYear(key);

    if (this.monthwise[monthkey + ""] != undefined) {
      let currentcount = this.monthwise[monthkey + ""];
      currentcount = currentcount + count;
      this.monthwise[monthkey + ""] = currentcount;
    } else {
      this.monthwise[monthkey + ""] = count;
    }
    return this.monthwise;
  }
}

