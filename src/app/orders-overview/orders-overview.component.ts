import { Component } from '@angular/core';
import { FabricatorOptionsComponent } from '../fabricator-options/fabricator-options.component';

@Component({
  selector: 'app-orders-overview',
  standalone: true,
  imports: [FabricatorOptionsComponent],
  templateUrl: './orders-overview.component.html',
  styleUrl: './orders-overview.component.scss',
})
export class OrdersOverviewComponent {}
