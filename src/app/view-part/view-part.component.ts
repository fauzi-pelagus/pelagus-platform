import { Component, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { DiscussionThreadComponent } from '../discussion-thread/discussion-thread.component';

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
  ],
  templateUrl: './view-part.component.html',
  styleUrl: './view-part.component.scss',
})
export class ViewPartComponent {
  accordion = viewChild.required(MatAccordion);
}
