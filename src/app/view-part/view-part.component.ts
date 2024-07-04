import { Component, Input, viewChild, OnInit } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  ActivatedRoute,
  RouterModule,
} from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { DiscussionThreadComponent } from '../discussion-thread/discussion-thread.component';
import { ChangeLogComponent } from '../change-log/change-log.component';
import { PartDetailsComponent } from '../part-details/part-details.component';
import { Product, PRODUCTS } from '../products';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { StlModelViewerModule } from 'angular-stl-model-viewer';

@Component({
  selector: 'app-view-part',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    DiscussionThreadComponent,
    ChangeLogComponent,
    PartDetailsComponent,
    ConfirmDialogModule,
    ToastModule,
    BreadcrumbModule,
    StlModelViewerModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './view-part.component.html',
  styleUrl: './view-part.component.scss',
})
export class ViewPartComponent implements OnInit {
  accordion = viewChild.required(MatAccordion);

  selectedProduct: Product | undefined;

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.selectedProduct = PRODUCTS.find((product) => product.id === id);
  }
}
