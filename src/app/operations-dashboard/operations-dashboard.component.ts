import {
  Component,
  ViewChild,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ViewOrderComponent } from '../view-order/view-order.component';
import { Orders, ORDERS } from '../orders';

@Component({
  selector: 'app-operations-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
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
  orders = ORDERS;
  displayedColumns: string[] = [
    'orderNumber',
    'item',
    'customer',
    'suppliers',
    'status',
    'action',
  ];
  dataSource = new MatTableDataSource<any>(ORDERS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @Input() order: any;
  @Output() select = new EventEmitter<Orders>();

  selectProduct() {
    this.select.emit(this.order);
  }
}
