import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Product, PRODUCTS } from '../products';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatMenuModule,
    TagModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() product: any;
  @Output() select = new EventEmitter<Product>();

  selectProduct() {
    this.select.emit(this.product);
  }
}
