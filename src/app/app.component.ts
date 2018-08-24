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
  monthWiseDataarray: any;
  yearWiseDataarray: any;
  currentyearchart: any;
  lineChartData: any;
  lineChartData1: any;
  WeekChart: any;
  QuarterChart: any;
  fromdate: any;
  todate: any;
  packagename: any;
  downloadDataArray: any[] = [];
  obj = {};
  other = [];
  array: any = [];
  total: any;
  downloads = [];
  yeardatapoint: any
  monthdatapoint: any;
  disabledDate: any[];
  errorMessage: any = [];
  showChart: boolean;
  showMonthChart: boolean;
  showYearChart: boolean;
  isLoading: boolean = false;
  showflag: boolean;
  package: string;
  sum: number = 0;
  currentyearsum: number = 0;
  currentmonthsum: number = 0;
  isLoading1: boolean;
  activeTab: boolean;
  perdaydownload: any;
  groupedByWeek = [];
  currentWeek=[];
  range: any;
  monthrange: any;
  totalDays: any;
  data: any;
  packageModel: PackageModel;
  yearwiseModel: YearWiseDownload;
  monthwisedata: any;
  monthsum1: any;
  yearsum: any;
  weeksum: any;
  quarter1download: number = 0;
  quarter2download: number = 0;
  quarter3download: number = 0;
  quarter4download: number = 0;

  constructor(private http: HttpClient) {
    this.packageModel = new PackageModel();
    this.packageModel.packageName = "amexio-ng-extensions";
    this.packageModel.fromDate = new Date('1-Jun-2017');
    this.packageModel.toDate = new Date();



  }

  ngOnInit() {
    this.getData();


  }

  d = new Date();

  //THIS METHOD IS USED FOR GET THE DATA FROM SERVICE AND CREATE CHART JSON 
  getData() {
    this.sum = 0;
    this.yearsum = 0;
    this.monthsum1 = 0;
    this.weeksum=0;
    this.currentyearsum = 0;
    this.currentmonthsum = 0;
    this.showChart = false;
    this.showMonthChart = false;
    this.showYearChart = false;
    this.isLoading = true;
    this.isLoading1 = true;
    this.errorMessage = [];
    this.lineChartData = [];
    this.monthWiseDataarray = [];
    this.yearWiseDataarray = [];
    this.currentyearchart = [];
    this.WeekChart = [];
    this.monthwisedata = [];
    this.QuarterChart = [];
    let inputUrl: any;
    this.quarter1download = 0;
    this.quarter2download = 0;
    this.quarter3download = 0;
    this.quarter4download = 0;
    this.validatePackageName();
    this.convertFromDate(this.packageModel.fromDate);
    this.convertToDate(this.packageModel.toDate);
    inputUrl = this.convertfromdate + ':' + this.converttodate + '/' + this.packageModel.packageName
    this.perdaydownload = this.packageModel.packageName + ' ' + ':' + ' ' + this.convertfromdate + ' ' + 'to' + ' ' + this.converttodate
    this.range = this.convertfromdate + ' ' + 'to' + ' ' + this.converttodate
    let response: any;
    this.http.get('https://api.npmjs.org/downloads/range/' + inputUrl, {}).subscribe(
      resp => {
        response = resp;
        this.showChart = true;

      },
      error => {


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

        let downloadDataArray1 = response.downloads;
        this.sum = 0;
        this.getAggregate(downloadDataArray1);
        this.getQuarterChart(downloadDataArray1);
      
        this.total = this.sum;

        this.lineChartData.push([
          { "datatype": "string", "label": 'Date' },
          { "datatype": "number", "label": 'Downloads Per Day' }
        ]);

        this.monthWiseDataarray.push([
          { "datatype": "string", "label": 'Months' },
          { "datatype": "number", "label": 'Downloads Per Month' }
        ]);

        this.yearWiseDataarray.push([
          { "datatype": "string", "label": 'Years' },
          { "datatype": "number", "label": 'Downloads Per Year' }
        ]);

        this.QuarterChart.push(
          [
            { "datatype": "string", "label": 'Quarter' },
            { "datatype": "number", "label": 'Downloads Per Quarter' }
          ],
          ['Q1', this.quarter1download],
          ['Q2', this.quarter2download],
          ['Q3', this.quarter3download],
          ['Q4', this.quarter4download],
        );
        response.downloads.forEach((downLoadObj: any) => {
          let dayWiseDownloadCount: any = new DayWiseDownloadCount(downLoadObj.day, downLoadObj.downloads);


          this.lineChartData.push(dayWiseDownloadCount.add());
        });



             let monthwisedata: MonthWiseDownload;
             monthwisedata = new MonthWiseDownload();
             response.downloads.forEach((objects: any) => {
             monthwisedata.groupData(objects.day, objects.downloads);

        });


        for (const key in monthwisedata.monthwise) {
          if (monthwisedata.monthwise.hasOwnProperty(key)) {
            const element = monthwisedata.monthwise[key];
            let obj = [];
            obj.push(key);
            obj.push(element);
            this.monthWiseDataarray.push(obj);

          }
        }


          let yearwisedata: YearWiseDownload;
          yearwisedata = new YearWiseDownload();
          response.downloads.forEach((objects: any) => {
          yearwisedata.groupData(objects.day, objects.downloads);
        });

        for (const key in yearwisedata.yearWise) {
          if (yearwisedata.yearWise.hasOwnProperty(key)) {
            const element = yearwisedata.yearWise[key];
            let year = [];
            year.push(key);
            year.push(element);
            this.yearWiseDataarray.push(year);

          }


        }
    
        this.getDataPoint2();
        this.getDataPoint3();
        this.getWeekData(downloadDataArray1);
        this.getDataPoint1(); 
      }
    );

    this.activeTab = true;
  }

//Setting by default Packagename
  validatePackageName() {
    if (this.packageModel.packageName == null || this.packageModel.packageName === '') {
      this.packageModel.packageName = "amexio-ng-extensions"
    }

  }
  onLinkClick(link: string) {
    window.open(link, '_blank');
  }

  convertFromDate(str: any) {
    let date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    this.convertfromdate = [date.getFullYear(), mnth, day].join("-");
  }

  convertToDate(str: any) {
      let date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
      this.converttodate = [date.getFullYear(), mnth, day].join("-");

  }
// Method contains logic to display QuarterChart
  getQuarterChart(downloadDataArray1) {

    let date = new Date();
    let currentyear: any;
    currentyear = date.getFullYear();
    let currentquarter: any;

    downloadDataArray1.forEach((quarter: any) => {
         currentquarter = this.getQuarter(quarter.day);
      if (quarter.day.includes(currentyear) && currentquarter == 1) {
        this.quarter1download = this.quarter1download + quarter.downloads;
      }
      else if (quarter.day.includes(currentyear) && currentquarter == 2) {
        this.quarter2download = this.quarter2download + quarter.downloads;
      }
      else if (quarter.day.includes(currentyear) && currentquarter == 3) {
        this.quarter3download = this.quarter3download + quarter.downloads;
      }
      else if (quarter.day.includes(currentyear) && currentquarter == 4) {
        this.quarter4download = this.quarter4download + quarter.downloads;
      }
    });
  }
 //Getting quarter of that date
  getQuarter(date: any) {
    let q = [1, 2, 3, 4];
    let d = new Date(date);
    let currentmonth = d.getMonth();
    return q[Math.floor(currentmonth / 3)];
  }
  //Method contains logic to display weekchart
  getWeekData(data:any) {

      this.groupedByWeek = data.reduce((m, o) => {
      let monday = this.getMonday(new Date(o.day));
      let mondayYMD = monday.toISOString().slice(0, 10);
      let found = m.find(e => e.day === mondayYMD);
      if (found) {
        found.downloads = found.downloads + o.downloads;
      } else {
        o.day = mondayYMD;
        m.push(o);
      }
      return m;
    }, []);
    let Weekwisecount: any;
    let weekData = [];
    this.WeekChart.push([
      { "datatype": "string", "label": 'Weeks' },
      { "datatype": "number", "label": 'Downloads Per Week' }
    ]);
      this.groupedByWeek.forEach((week: any) => {
      Weekwisecount = new DayWiseDownloadCount(week.day, week.downloads);

      let currentWeekNumber = this.getWeek(new Date(week.day));
      this.WeekChart.push([currentWeekNumber, week.downloads]);
    })

  }
  getMonday(d) {
    let day = d.getDay();
    let diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }
  getWeek(date) {
    let onejan: any;
    let today: any;
    let dayOfYear: any;
    onejan = new Date(date.getFullYear(), 0, 1);
    today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    dayOfYear = ((today - onejan + 86400000) / 86400000);
    let returnweek = Math.ceil(dayOfYear / 7);
    return 'W' + returnweek + '-' + date.getFullYear();
  }

 getCurrentWeekDatapoint(data:any)
 {
        this.currentWeek = data.reduce((m, o) => {
        let monday = this.getMonday(new Date(o.day));
        let mondayYMD = monday.toISOString().slice(0, 10);
        let found = m.find(e => e.day === mondayYMD);
        if (found) {
          found.downloads = found.downloads + o.downloads;
        } else {
          o.day = mondayYMD;
          m.push(o);
        }
        return m;
      }, []);
 }


  //To Display Datapoint for total,current month,current year,current week
  getDataPoint3() {

    let date1 = new Date();
    let mnth = ("0" + (date1.getMonth() + 1)).slice(-2);
    let day = ("0" + date1.getDate()).slice(-2);
    let year = date1.getFullYear();
    let fromdate2 = year + '-' + mnth + '-' + '01';
    let todate2 = year + '-' + mnth + '-' + day;
    let url = fromdate2 + ':' + todate2 + '/' + this.packageModel.packageName
    let monthresponse: any
    this.http.get('https://api.npmjs.org/downloads/range/' + url, {}).subscribe(
      resp => {
        monthresponse = resp;
        this.showChart = true;

      },
      () => {

      },
      () => {
        this.sum = 0;
        this.getAggregate(monthresponse.downloads)
        this.monthsum1 = this.sum;
      });
  }

  getDataPoint2() {

    let date1 = new Date();
    let mnth = ("0" + (date1.getMonth() + 1)).slice(-2);
    let day = ("0" + date1.getDate()).slice(-2);
    let year = date1.getFullYear();
    let fromdate1 = year + '-' + '01' + '-' + '01';
    let todate1 = year + '-' + mnth + '-' + day;
    let url = fromdate1 + ':' + todate1 + '/' + this.packageModel.packageName
    let yearresponse: any
    this.http.get('https://api.npmjs.org/downloads/range/' + url, {}).subscribe(
      resp => {
        yearresponse = resp;
        this.showChart = true;
      },
      () => {

      },
      () => {
        this.sum = 0;

        this.getAggregate(yearresponse.downloads)
        this.yearsum = this.sum;
      });

  }
  getDataPoint1()
  {
      let date1=new Date();
      let mnth = ("0" + (date1.getMonth() + 1)).slice(-2);
      let day = ("0" + date1.getDate()).slice(-2);
      let year = date1.getFullYear();   
      let fromdate1= year + '-' + '01' + '-' + '01';
      let todate1 = year + '-' + mnth + '-' + day;
      let url=fromdate1 + ':' + todate1 + '/' + this.packageModel.packageName;
      let weekresponse:any
      let weekdatapoint:any
      let week:any;
      this.http.get('https://api.npmjs.org/downloads/range/' + url, {}).subscribe(
        resp => {
             weekresponse  = resp;
             this.showChart = true;
           
        },
        () => {
  
        },
        () => {
                  this.getCurrentWeekDatapoint(weekresponse.downloads);
                  weekdatapoint = this.currentWeek.length - 1;
                  week = this.currentWeek[weekdatapoint]; 
                  this.weeksum=week.downloads;   
             });
  }
  
//to aggregate current year,current month data
  getAggregate(data: any) {
        data.forEach((downLoadObj: any) => {
        let totaldownload: any = downLoadObj.downloads;
        this.sum = this.sum + totaldownload;
    });

  }
}

export class PackageModel {
  fromDate: any = '';
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
//To display Per Month chart
export class MonthWiseDownload {

  monthwise: number[];
  constructor() {
    this.monthwise = [];

  }
//method to get monthyear
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
//To Display Per Year Chart
export class YearWiseDownload {
  
  yearWise: number[];
 
  constructor() {
    this.yearWise = [];

  }
//Method to get fullyear
  getYear(day: string) {
    const date = new Date(day);
    return [date.getFullYear()].join("-");
  }

  groupData(key: string, count: number): any {
    const monthkey = this.getYear(key);

    if (this.yearWise[monthkey + ""] != undefined) {
      let currentcount = this.yearWise[monthkey + ""];
      currentcount = currentcount + count;
      this.yearWise[monthkey + ""] = currentcount;
    } else {
      this.yearWise[monthkey + ""] = count;
    }
    return this.yearWise;
  }
}

