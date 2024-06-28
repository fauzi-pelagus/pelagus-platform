import { Component, Input, viewChild, OnInit } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  ActivatedRoute,
} from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { DiscussionThreadComponent } from '../discussion-thread/discussion-thread.component';
import { ChangeLogComponent } from '../change-log/change-log.component';
import { PartDetailsComponent } from '../part-details/part-details.component';
import { Product, PRODUCTS } from '../products';

@Component({
  selector: 'app-view-part',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    DiscussionThreadComponent,
    ChangeLogComponent,
    PartDetailsComponent,
  ],
  templateUrl: './view-part.component.html',
  styleUrl: './view-part.component.scss',
})
export class ViewPartComponent implements OnInit {
  accordion = viewChild.required(MatAccordion);

  selectedProduct: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.selectedProduct = PRODUCTS.find((product) => product.id === id);
  }
}
