/**
 * Created by kedar on 21/9/18.
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
        selector: 'chart-d3-page',
        templateUrl: './chartd3.demo.html',
})
export class ChartD3Demo implements OnInit {
        htmlCode: string;
        typeScriptCode: string;
        userDefineColorData: any;
        userDefineColors: any;
        sourceData: any;
        stackData: any;
        copyMsgArray: any[];
        donutData: any;
        pieData: any;
        donutDataColor: any;
        doubleLineData: any;
        multiData: any;
        comboChartData: any;
        horizontalBarData: any;
        multiAreaData: any;
        scatterChartData: any;
        histogramdata: any;
        waterfallChartData: any;
        bubblechart: any;
        userDataSource: any;
        barData: any[];
        lineArray: any[];
        lineArray2: any[];
        barArray: any[];

        constructor(private http: HttpClient, private router: Router) {

                this.multiAreaData = [
                        ["date", "index", "open", "close", "high"],
                        ["2014", 58.13, 610, 234, 100],
                        ["2015", 53.98, 626, 356, 150],
                        ["2016", 99.00, 543, 456, 200],
                        ["2017", 130.28, 443, 556, 250],
                        ["2018", 58.13, 610, 245, 300],
                        ["2019", 53.98, 626, 345, 350],
                        ["2020", 99.00, 543, 556, 400],
                        ["2021", 130.28, 443, 443, 500]
                ];

                this.comboChartData = [
                        ['State', 'Rice Production', 'Rice Export'],
                        ['W.B', 600, 50],
                        ['Kerala', 500, 100],
                        ['Goa', 400, 350],
                        ['Assam', 250, 200],
                        ['Punjab', 300, 250],
                        ['Bihar', 400, 380],
                        ['Orissa', 500, 200]
                ];
                this.barData = [
                        ['State', 'Corn Export', 'Bajra Export', 'Rice Export', 'Wheat Export', 'Jowar Export'],
                        ['Andhra Pradesh', 600, 500, 250, 50, 95],
                        ['Kerala', 500, 400, 75, 150, 195],
                        ['Tamil Nadu', 400, 300, 250, 50, 95],
                        ['Assam', 250, 150, 75, 150, 195],
                        ['Maharshtra', 300, 200, 250, 50, 95]
                ];
                this.lineArray = [
                        { column: "Rice Export", label: true, color: "yellow" },
                        { column: "Jowar Export" },
                        { column: "Wheat Export" }
                ];
                this.lineArray2 = [
                        { column: "Jowar Export" },
                        { column: "Wheat Export", label: true }
                ];
                this.barArray = [
                        { column: "Corn Export", label: true },
                        { column: "Bajra Export", label: true }];


                this.horizontalBarData = [
                        ['year', 'production'],
                        ['2011', 300],
                        ['2012', 500],
                        ['2013', 700],
                        ['2014', 400],
                        ['2015', 600],
                        ['2016', 500],
                        ['2017', 200]
                ];

                this.userDefineColors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#b9936c"];

                this.userDefineColorData =
                        [
                                ['city', 'population'],
                                ['Mumbai', 94423],
                                ['Kochi', 69932],
                                ['Delhi', 91345],
                                ['Chennai', 46467],
                                ['Pune', 31244],
                                ['Jaipur', 30461],
                                ['Ranchi', 84436]
                        ]

                this.bubblechart = [
                        ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
                        ['CAN', 80.66, 1.67, 'North America', 33739900],
                        ['DEU', 79.84, 1.36, 'Europe', 81902307],
                        ['DNK', 78.6, 1.84, 'Europe', 5523095],
                        ['EGY', 72.73, 2.78, 'Middle East', 79716203],
                        ['GBR', 80.05, 2, 'Europe', 61801570],
                        ['IRN', 72.49, 1.7, 'Middle East', 73137148],
                        ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
                        ['ISR', 81.55, 2.96, 'Middle East', 7485600],
                        ['RUS', 68.6, 1.54, 'Europe', 141850000],
                        ['USA', 78.09, 2.05, 'North America', 307007000]
                ];
        }
        ngOnInit() {

                this.donutDataColor = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];

                this.donutData = [
                        ['browser', 'activity'],
                        ['IE', 11.43],
                        ['Chrome', 63.14],
                        ['Safari', 3.83],
                        ['Firefox', 10.23],
                        ['Others', 10.01]
                ];


                this.pieData = [
                        ['country', 'ratio'],
                        ['India', 30.3],
                        ['Spain', 9.52],
                        ['France', 13.68],
                        ['China', 18.71],
                        ['Germany', 8.01],
                        ['U.K', 8.01],
                        ['U.S', 14.01],
                        ['Korea', 4.01]
                ];

                this.multiData = [
                        ['date', 'Sales', 'Expenses', 'Profit'],
                        ['2014', 1000, 400, 200],
                        ['2015', 1170, 460, 250],
                        ['2016', 660, 1120, 300],
                        ['2017', 1030, 540, 350],
                        ['2018', 1090, 740, 450],
                        ['2019', 1050, 640, 350]
                ];

                this.doubleLineData = [[{ "datatype": "number", "label": "Day" }, { "datatype": "number", "label": "XYZ" }, { "datatype": "number", "label": "PQR" }], [0, 0, 0], [1, 10, 5], [2, 23, 15], [3, 17, 9], [4, 18, 10], [5, 9, 5], [6, 11, 3], [7, 27, 19], [8, 33, 25], [9, 40, 32], [10, 32, 24], [11, 35, 27], [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39]]

                this.stackData = [
                        ['Year', 'Sales', 'Expenses', 'Profit'],
                        ['2014', 1000, 400, 200],
                        ['2015', 1170, 460, 250],
                        ['2016', 660, 1120, 300],
                        ['2017', 1030, 540, 350],
                        ['2018', 1090, 740, 450],
                        ['2019', 1050, 640, 350]
                ];

                this.scatterChartData = [
                        ['Age', 'Weight'],
                        [5, 35],
                        [8, 40],
                        [10, 45],
                        [3, 12],
                        [12, 48],
                        [6, 39],
                        [8, 42],
                        [5, 32],
                        [7, 46],
                        [1, 10],
                        [3, 15],
                        [2, 8],
                        [4, 20]
                ];

                this.histogramdata = [
                        ['Dinosaur', 'Length'],
                        ['Acrocanthosaurus (top-spined lizard)', 12.2],
                        ['Albertosaurus (Alberta lizard)', 9.1],
                        ['Allosaurus (other lizard)', 12.2],
                        ['Apatosaurus (deceptive lizard)', 22.9],
                        ['Archaeopteryx (ancient wing)', 0.9],
                        ['Argentinosaurus (Argentina lizard)', 36.6],
                        ['Baryonyx (heavy claws)', 9.1],
                        ['Brachiosaurus (arm lizard)', 30.5],
                        ['Ceratosaurus (horned lizard)', 6.1],
                        ['Coelophysis (hollow form)', 2.7],
                        ['Compsognathus (elegant jaw)', 0.9],
                        ['Deinonychus (terrible claw)', 2.7],
                        ['Diplodocus (double beam)', 27.1],
                        ['Dromicelomimus (emu mimic)', 3.4],
                        ['Gallimimus (fowl mimic)', 5.5],
                        ['Mamenchisaurus (Mamenchi lizard)', 21.0],
                        ['Megalosaurus (big lizard)', 7.9],
                        ['Microvenator (small hunter)', 1.2],
                        ['Ornithomimus (bird mimic)', 4.6],
                        ['Oviraptor (egg robber)', 1.5],
                        ['Plateosaurus (flat lizard)', 7.9],
                        ['Sauronithoides (narrow-clawed lizard)', 2.0],
                        ['Seismosaurus (tremor lizard)', 45.7],
                        ['Spinosaurus (spiny lizard)', 12.2],
                        ['Supersaurus (super lizard)', 30.5],
                        ['Tyrannosaurus (tyrant lizard)', 15.2],
                        ['Ultrasaurus (ultra lizard)', 30.5],
                        ['Velociraptor (swift robber)', 1.8]
                ]

                this.waterfallChartData = [
                        ["name", "value"],
                        ["Product Revenue", 420000],
                        ["Services Revenue", 210000],
                        ["Fixed Costs", -170000],
                        ["letiable Costs", -140000]
                ];
        }


        previous() {
                this.router.navigate(['amexio-colors']);
        }

        next() {
                this.router.navigate(['amexio-accessibility']);
        }


}


