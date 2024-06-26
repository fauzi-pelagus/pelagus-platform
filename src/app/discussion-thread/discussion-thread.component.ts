import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PRODUCTS } from '../products';

@Component({
  selector: 'app-discussion-thread',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatAccordion,
    MatExpansionModule,
    MatDivider,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './discussion-thread.component.html',
  styleUrl: './discussion-thread.component.scss',
})
export class DiscussionThreadComponent {
  // products = PRODUCTS;
  @Input() threads: any;
}
