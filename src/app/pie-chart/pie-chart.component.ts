import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent implements OnInit {
  public chart: any;

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'doughnut', //this denotes the type of chart

      data: {
        // values on X-Axis
        labels: [
          'Very feasible',
          'Feasible',
          'Hardly feasible',
          'Not feasible',
        ],
        datasets: [
          {
            label: 'Dataset',
            data: ['24', '75', '90', '124'],
            backgroundColor: ['#12AF6D', '#F7941D', '#E4E6EC', '#EEF0F6'],
          },
        ],
      },
      options: {
        aspectRatio: 1.8,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });
  }

  ngOnInit() {
    this.createChart();
  }
}
