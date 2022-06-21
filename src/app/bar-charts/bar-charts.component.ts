import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBarChartData } from '../state/products.selectors';
import { ChartData }  from '../state/products.model';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {
 
  barChartData$ =  this.store.select(selectBarChartData);
  barChartData!: ChartData[];
  view: any[2] = [650, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendPosition = LegendPosition.Right;
  showXAxisLabel = true;
  xAxisLabel = 'Department';
  showYAxisLabel = true;
  yAxisLabel = 'Number of goods';

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.barChartData$.subscribe(data => {this.barChartData = data});
  }

}
