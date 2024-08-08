import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  ActivatedRoute,
  RouterModule,
} from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { Orders, ORDERS } from '../orders';
import { SupplierSelectionComponent } from '../supplier-selection/supplier-selection.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TimelineModule } from 'primeng/timeline';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { OrderRequirementsComponent } from '../order-requirements/order-requirements.component';

@Component({
  selector: 'app-view-order',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatStepperModule,
    MatExpansionModule,
    SupplierSelectionComponent,
    TimelineModule,
    OrderRequirementsComponent,
  ],
  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.scss',
})
export class ViewOrderComponent {
  selectedProduct: Orders | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.selectedProduct = ORDERS.find((order) => order.id === id);
  }

  events = [
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
