import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface Entries {
  id: number;
  username: string;
  action: string;
  section: string;
  previous: string;
  new: string;
  timestamp: string;
}

const CHANGELOG: Entries[] = [
  {
    id: 1,
    username: 'User 2',
    action: 'comment',
    section: 'Clarification topic 1',
    previous:
      'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor. Nulla congue cras est in sed lorem mattis donec nam.',
    new: 'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor.',
    timestamp: '10/06/24, 9:03 AM',
  },
  {
    id: 2,
    username: 'User 1',
    action: 'edit',
    section: 'Part details: length (mm)',
    previous: '245',
    new: '230',
    timestamp: '09/06/24, 9:03 AM',
  },
  {
    id: 3,
    username: 'User 1',
    action: 'upload',
    section: 'Inspection & testing: Dimensional - Tolerance',
    previous: '-',
    new: 'file-upload.png',
    timestamp: '08/06/24, 9:03 AM',
  },
  {
    id: 4,
    username: 'User 1',
    action: 'delete',
    section: 'Operating conditions: High temperature',
    previous: 'Old information',
    new: '-',
    timestamp: '07/06/24, 9:03 AM',
  },
  {
    id: 5,
    username: 'User 2',
    action: 'comment',
    section: 'Clarification topic 2',
    previous:
      'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor. Nulla congue cras est in sed lorem mattis donec nam.',
    new: 'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor. Nulla congue cras est in sed lorem mattis donec nam.',
    timestamp: '06/06/24, 9:03 AM',
  },
  {
    id: 6,
    username: 'User 2',
    action: 'comment',
    section: 'Clarification topic 3',
    previous:
      'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor. Nulla congue cras est in sed lorem mattis donec nam.',
    new: 'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor. Nulla congue cras est in sed lorem mattis donec nam.',
    timestamp: '05/06/24, 9:03 AM',
  },
  {
    id: 7,
    username: 'User 1',
    action: 'comment',
    section: 'Clarification topic 2',
    previous:
      'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor. Nulla congue cras est in sed lorem mattis donec nam.',
    new: 'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor. Nulla congue cras est in sed lorem mattis donec nam.',
    timestamp: '04/06/24, 9:03 AM',
  },
  {
    id: 8,
    username: 'User 2',
    action: 'comment',
    section: 'Clarification topic 3',
    previous:
      'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor. Nulla congue cras est in sed lorem mattis donec nam.',
    new: 'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor. Nulla congue cras est in sed lorem mattis donec nam.',
    timestamp: '03/06/24, 9:03 AM',
  },
  {
    id: 9,
    username: 'User 2',
    action: 'comment',
    section: 'Clarification topic 2',
    previous:
      'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor. Nulla congue cras est in sed lorem mattis donec nam.',
    new: 'Lorem ipsum dolor sit amet consectetur. Sem ornare egestas id sed tristique sem sollicitudin tortor. Nulla congue cras est in sed lorem mattis donec nam.',
    timestamp: '02/06/24, 9:03 AM',
  },
];

@Component({
  selector: 'app-change-log',
  styleUrl: './change-log.component.scss',
  templateUrl: './change-log.component.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class ChangeLogComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'timestamp',
    'username',
    'action',
    'section',
    'previous',
    'new',
  ];
  dataSource = new MatTableDataSource<any>(CHANGELOG);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
