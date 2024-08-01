import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDivider, MatDividerModule } from '@angular/material/divider';

export interface Orders {
  orderNumber: string;
  items: any[];
  qty: number;
  price: number;
  leadTime: number;
  customer: string;
  suppliers: string[];
  status: string;
  action: string;
}

const ACTIVE_ORDERS: Orders[] = [
  {
    orderNumber: 'S24-2189',
    items: [
      {
        title: 'Close impeller for fresh water pump 1',
        image: 'assets/img/impeller-1.png',
      },
      {
        title: 'Close impeller for fresh water pump 2',
        image: 'assets/img/impeller-2.png',
      },
    ],
    qty: 1,
    price: 12000,
    leadTime: 30,
    customer: 'John Doe',
    suppliers: ['Supplier 1', 'Supplier 2', 'Supplier 3'],
    status: 'In production',
    action: 'View details',
  },
];

@Component({
  selector: 'app-operations-dashboard',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatChipsModule,
    MatPaginatorModule,
    MatPaginator,
    MatCardModule,
    MatDividerModule,
  ],
  templateUrl: './operations-dashboard.component.html',
  styleUrl: './operations-dashboard.component.scss',
})
export class OperationsDashboardComponent implements AfterViewInit {
  orders = ACTIVE_ORDERS;
  displayedColumns: string[] = [
    'orderNumber',
    'item',
    'customer',
    'suppliers',
    'status',
    'action',
  ];
  dataSource = new MatTableDataSource<any>(ACTIVE_ORDERS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
