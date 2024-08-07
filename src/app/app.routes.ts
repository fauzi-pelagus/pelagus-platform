import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPartComponent } from './view-part/view-part.component';
import { PartsUnderReviewComponent } from './parts-under-review/parts-under-review.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersOverviewComponent } from './orders-overview/orders-overview.component';
import { OperationsDashboardComponent } from './operations-dashboard/operations-dashboard.component';
import { ViewOrderComponent } from './view-order/view-order.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'parts-under-review', component: PartsUnderReviewComponent },
  { path: 'parts-under-review/view-part/:id', component: ViewPartComponent },
  { path: 'orders-overview', component: OrdersOverviewComponent },
  { path: 'operations-dashboard', component: OperationsDashboardComponent },
  {
    path: 'operations-dashboard/view-order/:id',
    component: ViewOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
