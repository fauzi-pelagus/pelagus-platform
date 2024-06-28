import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPartComponent } from './view-part/view-part.component';
import { PartsUnderReviewComponent } from './parts-under-review/parts-under-review.component';

export const routes: Routes = [
  { path: 'view-part/:id', component: ViewPartComponent },
  { path: 'parts-under-review', component: PartsUnderReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
