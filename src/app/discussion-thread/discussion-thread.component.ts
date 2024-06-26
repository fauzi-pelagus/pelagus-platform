import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDivider } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import {
  ChatClientService,
  ChannelService,
  StreamI18nService,
  StreamAutocompleteTextareaModule,
  StreamChatModule,
} from 'stream-chat-angular';

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
    MatIconModule,
    TranslateModule,
    StreamAutocompleteTextareaModule,
    StreamChatModule,
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

  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService
  ) {
    const apiKey = 'dz5f4d5kzrue';
    const userId = 'odd-butterfly-9';
    const userToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoib2RkLWJ1dHRlcmZseS05IiwiZXhwIjoxNzE5NDA4MjczfQ.W5BcbIaBUDNg--25Ru0YP0vMz2VMzHt6Lic60VB-i4A';
    this.chatService.init(apiKey, userId, userToken);
    this.streamI18nService.setTranslation();
  }

  async ngOnInit() {
    const channel = this.chatService.chatClient.channel(
      'messaging',
      'talking-about-angular',
      {
        // add as many custom fields as you'd like
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png',
        name: 'Talking about Angular',
      }
    );
    await channel.create();
    this.channelService.init({
      type: 'messaging',
      id: { $eq: 'talking-about-angular' },
    });
  }
}
