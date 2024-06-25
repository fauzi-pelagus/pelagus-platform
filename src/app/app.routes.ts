import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { products } from './products';
import { ViewPartComponent } from './view-part/view-part.component';
import { PartsUnderReviewComponent } from './parts-under-review/parts-under-review.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'view-part', component: ViewPartComponent },
  { path: 'card', component: CardComponent },
  { path: 'parts-under-review', component: PartsUnderReviewComponent },
];
