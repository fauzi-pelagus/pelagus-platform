import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-order-requirements',
  standalone: true,
  imports: [MatChipsModule, MatExpansionModule, MatDividerModule],
  templateUrl: './order-requirements.component.html',
  styleUrl: './order-requirements.component.scss',
})
export class OrderRequirementsComponent {}
