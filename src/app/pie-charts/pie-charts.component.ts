import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPieChartData } from '../state/products.selectors';
import { ChartData }  from '../product-list/products.model';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.css']
})
export class PieChartsComponent implements OnInit {

  pieChartData$ =  this.store.select(selectPieChartData);
  pieChartData!: ChartData[];
  view: any[2] = [600, 350];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition = LegendPosition.Below;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.pieChartData$.subscribe(data => {this.pieChartData = data});
  }

}
