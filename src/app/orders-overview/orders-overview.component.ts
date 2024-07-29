import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FabricatorOptionsComponent } from '../fabricator-options/fabricator-options.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

export interface Orders {
  orderNumber: string;
  item: string;
  image: string;
  qty: number;
  price: number;
  leadTime: number;
  status: string;
  action: string;
}

const ACTIVE_ORDERS: Orders[] = [
  {
    orderNumber: 'S24-2189',
    item: 'Close impeller for fresh water pump 1',
    image: 'assets/img/impeller-1.png',
    qty: 1,
    price: 12000,
    leadTime: 30,
    status: 'In production',
    action: 'View details',
  },
  {
    orderNumber: 'S24-2188',
    item: 'Close impeller for fresh water pump 2',
    image: 'assets/img/impeller-2.png',
    qty: 1,
    price: 12000,
    leadTime: 30,
    status: 'In production',
    action: 'View details',
  },
  {
    orderNumber: 'S24-2187',
    item: 'Close impeller for fresh water pump 3',
    image: 'assets/img/impeller-3.png',
    qty: 1,
    price: 12000,
    leadTime: 30,
    status: 'In production',
    action: 'View details',
  },
];

@Component({
  selector: 'app-orders-overview',
  standalone: true,
  imports: [
    FabricatorOptionsComponent,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    PieChartComponent,
    MatChipsModule,
    MatPaginator,
    MatPaginatorModule,
  ],
  templateUrl: './orders-overview.component.html',
  styleUrl: './orders-overview.component.scss',
})
export class OrdersOverviewComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'orderNumber',
    'item',
    'price',
    'leadTime',
    'status',
    'action',
  ];
  dataSource = new MatTableDataSource<any>(ACTIVE_ORDERS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
