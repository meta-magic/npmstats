import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-package-search',
  templateUrl: './package-search.component.html',
  styleUrls: ['./package-search.component.css']
})

export class PackageSearchComponent implements OnInit {

 
  packageModel: PackageModel;
  currentDate: any;
  convertfromdate: any;
  converttodate: any;
  lineChartData: any;
  fromdate: any;
  todate: any;
  packagename: any;
  downloadDataArray :any;
  other =[]; 
  array:any=[];
  downloads=[];
  disabledDate:any[];
  errorMessage: any = [];
  showChart:boolean;
  isLoading:boolean = false;
  showflag:boolean;
  package:string;
  sum:number=0;
  isLoading1: boolean;
  

  constructor(private http: HttpClient) {

    this.packageModel = new PackageModel();
   
 }

  ngOnInit() {
  }

  validatePackageName() {
    if( this.packageModel.packageName == null || this.packageModel.packageName === '') {
      this.packageModel.packageName="amexio-ng-extensions"
    }
    
  }
    
  getData()
   {
    this.sum=0;
    this.showChart=false;
    this.isLoading1 = true;
    this.isLoading=true;
    this.errorMessage=[];
    this.validatePackageName();
    this.lineChartData=[];
    let inputUrl: any;
    this.convertFromDate(this.packageModel.fromDate);
    this.convertToDate(this.packageModel.toDate);
    inputUrl = this.convertfromdate + ':' + this.converttodate + '/' + this.packageModel.packageName
    let response: any;
    this.http.get('https://api.npmjs.org/downloads/range/' + inputUrl, {}).subscribe(
      resp => {
        response = resp;
        this.showChart= true;
      
      },
      error => {
  
                      console.log("GOT ERROR",JSON.stringify(error.error.error));
                      this.showChart=false;
                      if(JSON.stringify(error.error.error) == '"end date > start date"')
                      {
                         this.errorMessage.push("To-Date should be greater than From-Date")
                      } else if (JSON.stringify(error.error.error) == '"invalid date"'){
                        this.errorMessage.push("Enter Valid Date");
                      } else {
                        this.errorMessage.push(JSON.stringify(error.error.error));

                      }
                      
                      this.isLoading=false;
                      this.isLoading1 = false;
               },
      () => {
      
      
       this.downloadDataArray = response.downloads;
        this.lineChartData.push([
          { "datatype": "string", "label": 'Date' },
          { "datatype": "number", "label": 'Downloads' }
        ]);
            this.downloadDataArray.forEach((downLoadObj:any)=>{
            let dayWiseDownloadCount:any;
            dayWiseDownloadCount=new DayWiseDownloadCount(downLoadObj.day,downLoadObj.downloads);

           
            let totaldownload:any;
            
            totaldownload=dayWiseDownloadCount.downloads;
        

            this.sum =this.sum+totaldownload;
            this.lineChartData.push(dayWiseDownloadCount.add());
            
        });
             this.showChart=true;
             this.isLoading=false;
             const totalCount=this.sum;
      }
    );
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
  packageName: string;
  fromDate: string;
  toDate: string;
  constructor() {
    this.packageName = '';
    this.fromDate = '';
    this.toDate = '';
  }
}

export class DayWiseDownloadCount {
  downloads:string;
  day:number;
  total = 0;


  constructor(day:number,downloads:string){
     this.day=day;
     this.downloads=downloads;
  }

  add():any[]{
   return [
    this.day,
    this.downloads
    ];
  }
}