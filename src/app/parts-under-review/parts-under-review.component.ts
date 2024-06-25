import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { products } from '../products';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-parts-under-review',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    TopBarComponent,
    RouterOutlet,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRippleModule,
  ],
  templateUrl: './parts-under-review.component.html',
  styleUrl: './parts-under-review.component.scss',
})
export class PartsUnderReviewComponent {
  products = [...products];
}
