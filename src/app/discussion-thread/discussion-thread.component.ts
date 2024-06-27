import { Component, OnInit } from '@angular/core';
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
  threads = [
    {
      title: 'Clarification topic 1',
      summary:
        'Lorem ipsum dolor sit amet consectetur. Nec iaculis lectus volutpat vitae sed sit semper posuere. Semper ultrices integer neque tristique magna ultricies. Enim parturient consequat gravida varius dignissim urna eget. Auctor a gravida lobortis iaculis quam est.',
      status: 'Unresolved',
      isResolved: false,
      comments: [
        {
          firstName: 'User',
          lastName: '1',
          entry:
            'Lorem ipsum dolor sit amet consectetur. A in leo pellentesque felis amet eu. Pharetra eget tellus arcu posuere feugiat. Amet ligula venenatis neque a sit id pellentesque. Vel libero cursus at faucibus ac a. Faucibus sit ultrices maecenas nibh. Odio at sollicitudin turpis pharetra. Platea enim viverra aliquet sodales morbi accumsan. Non nisi aliquet in sem vulputate venenatis eget quis. Sit rhoncus nisl fusce imperdiet.',
          timestamp: 'now',
        },
        {
          firstName: 'User',
          lastName: '2',
          entry:
            'Nec iaculis lectus volutpat vitae sed sit semper posuere. Semper ultrices integer neque tristique magna ultricies. Enim parturient consequat gravida varius dignissim urna eget. Auctor a gravida lobortis iaculis quam est.',
          timestamp: '12/05',
        },
      ],
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
