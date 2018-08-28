import { Component, OnInit,Input } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dependencies',
  templateUrl: './dependencies.component.html',
  styleUrls: ['./dependencies.component.css']
})
export class DependenciesComponent implements OnInit {
@Input() dependencyarray:any;
@Input() devdependency:any; 
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
   }

}
