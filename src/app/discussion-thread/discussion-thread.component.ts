import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

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
    MatTabsModule,
    MatInputModule,
    MatAccordion,
    MatExpansionModule,
    MatDivider,
    MatIconModule,
  ],
  templateUrl: './discussion-thread.component.html',
  styleUrl: './discussion-thread.component.scss',
})
export class DiscussionThreadComponent {
  threads = [
    {
      title: 'Clarification topic 1',
      summary:
        'Lorem ipsum dolor sit amet consectetur. Nec iaculis lectus volutpat vitae sed sit semper posuere. Semper ultrices integer neque tristique magna ultricies. Enim parturient consequat gravida varius dignissim urna eget. Auctor a gravida lobortis iaculis quam est.',
      status: 'Unresolved',
      isResolved: false,
    },
    {
      title: 'Clarification topic 2',
      summary:
        'Lorem ipsum dolor sit amet consectetur. Nec iaculis lectus volutpat vitae sed sit semper posuere. Semper ultrices integer neque tristique magna ultricies. Enim parturient consequat gravida varius dignissim urna eget. Auctor a gravida lobortis iaculis quam est.',
      status: 'Unresolved',
      isResolved: false,
    },
    {
      title: 'Clarification topic 3',
      summary:
        'Lorem ipsum dolor sit amet consectetur. Nec iaculis lectus volutpat vitae sed sit semper posuere. Semper ultrices integer neque tristique magna ultricies. Enim parturient consequat gravida varius dignissim urna eget. Auctor a gravida lobortis iaculis quam est.',
      status: 'Unresolved',
      isResolved: false,
    },
  ];
}
