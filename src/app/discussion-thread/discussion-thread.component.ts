import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Event,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDivider } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Button } from 'primeng/button';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-discussion-thread',
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAccordion,
    MatExpansionModule,
    MatDivider,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    ImageModule,
    FileUploadModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './discussion-thread.component.html',
  styleUrl: './discussion-thread.component.scss',
})
export class DiscussionThreadComponent implements OnInit {
  @Input() threads: any;

  ngOnInit() {}

  isShow: boolean = true;
  editMode: boolean = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  createNewThread() {
    this.threads.unshift({
      title: this.threads.title,
      summary: this.threads.summary,
      isResolved: false,
      comments: [
        {
          firstName: 'User',
          lastName: '2',
          entry: 'created this thread.',
          timestamp: '11/05',
          attachments: '',
        },
      ],
    });
    this.isShow = !this.isShow;
  }

  editThread() {
    this.threads.editMode = !this.threads.editMode;
  }
}
