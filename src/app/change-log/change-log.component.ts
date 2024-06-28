import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];
export interface Entries {
  id: number;
  username: string;
  type: string;
  previous: string;
  new: string;
  timestamp: string;
}

const changelog: Entries[] = [
  {
    id: 1,
    username: 'test 1',
    type: 'comment',
    previous: 'previous entry',
    new: 'new entry',
    timestamp: '12/04/2024',
  },
  {
    id: 2,
    username: 'test 2',
    type: 'comment',
    previous: 'previous entry',
    new: 'new entry',
    timestamp: '11/04/2024',
  },
];

@Component({
  selector: 'app-change-log',
  styleUrl: './change-log.component.scss',
  templateUrl: './change-log.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class ChangeLogComponent {
  displayedColumns: string[] = ['timestamp', 'username', 'previous', 'new'];
  dataSource = changelog;
}
