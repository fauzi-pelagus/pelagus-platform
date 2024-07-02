import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

export interface Actions {
  timestamp: string;
  productName: string;
  action: string;
}

const ACTIONS_NEEDED: Actions[] = [
  {
    timestamp: '12/04/2024, 9.04am',
    productName: '1st impeller for fresh water pump',
    action: 'requires your final review and approval',
  },
  {
    timestamp: '12/04/2024, 9.04am',
    productName: '1st impeller for fresh water pump',
    action: 'requires your final review and approval',
  },
  {
    timestamp: '12/04/2024, 9.04am',
    productName: '1st impeller for fresh water pump',
    action: 'requires your final review and approval',
  },
];

export interface Parts {
  name: string;
  score: number;
  action: string;
}

const FEASIBLE_PARTS: Parts[] = [
  {
    name: '1st impeller for fresh water pump',
    score: 4.03,
    action: 'Create part',
  },
  {
    name: '2nd impeller for fresh water pump',
    score: 3.98,
    action: 'Create part',
  },
  {
    name: '3rd impeller for fresh water pump',
    score: 3.88,
    action: 'Create part',
  },
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    PieChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  actions = ACTIONS_NEEDED;
  parts = FEASIBLE_PARTS;

  displayedColumns: string[] = ['name', 'score', 'action'];
}
