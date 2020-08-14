import { Component, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Color} from 'ng2-charts';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }


  doughnutChartLabels: Label[] = ['fail', 'pass'];
  doughnutChartData: MultiDataSet = [
    [10, 30, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
  






  lineChartData: ChartDataSets[] = [
    { data: [0, 30, 10, 40, 90, 60,50,80], label: 'pass' },
    {data:[0,20,40,30,70,50,40,15],label:'fail'}
  ];

  lineChartLabels: Label[] = ['1','2','3','4','5','6','7','8'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';



  ngOnInit() {
  }

}
