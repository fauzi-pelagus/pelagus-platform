import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { ViewBidsComponent } from '../view-bids/view-bids.component';
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
import { DialogModule } from 'primeng/dialog';
import { TimelineModule } from 'primeng/timeline';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

export interface Quotes {
  orderNumber: string;
  item: string;
  image: string;
  qty: number;
  price: number;
  leadTime: number;
  status: string;
  action: string;
}

const QUOTES: Quotes[] = [
  {
    orderNumber: 'S24-2190',
    item: 'Close impeller for fresh water pump 1',
    image: 'assets/img/impeller-4.png',
    qty: 1,
    price: 12000,
    leadTime: 30,
    status: 'Bids received',
    action: 'View details',
  },
  {
    orderNumber: 'S24-2191',
    item: 'Close impeller for fresh water pump 1',
    image: 'assets/img/impeller-3.png',
    qty: 1,
    price: 12000,
    leadTime: 30,
    status: 'Awaiting bids',
    action: 'View details',
  },
];

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
    ViewBidsComponent,
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
    DialogModule,
    TimelineModule,
    TableModule,
    TagModule,
    ButtonModule,
    ChipModule,
  ],
  templateUrl: './orders-overview.component.html',
  styleUrl: './orders-overview.component.scss',
})
export class OrdersOverviewComponent implements AfterViewInit {
  quotes = QUOTES;
  orders = ACTIVE_ORDERS;
  events: any[];

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

  @ViewChild(ViewBidsComponent)
  dialogComponent!: ViewBidsComponent;

  showDialog() {
    this.dialogComponent.display = true;
  }

  constructor() {
    this.events = [
      {
        status: 'Awaiting bids',
        icon: 'pi pi-check',
        date: '15/10/2020 10:30',
      },
      {
        status: 'Bids received',
        icon: 'pi pi-check',
        date: '15/10/2020 10:30',
      },
      {
        status: 'Awaiting PO',
        icon: 'pi pi-check',
        date: '15/10/2020 10:30',
      },
    ];
  }
}
