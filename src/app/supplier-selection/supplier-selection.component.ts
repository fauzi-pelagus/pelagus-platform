import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface Suppliers {
  id: number;
  name: string;
  email: string;
  country: string;
  tech: any[];
}

const SUPPLIERS: Suppliers[] = [
  {
    id: 1,
    name: 'Amy Choi',
    email: 'amychoi@email.com',
    country: 'Korea',
    tech: [
      'Assembly',
      'Binder Jetting',
      'FDM',
      'Material jetting',
      'Others',
      'SLM',
      'SLA',
      'SLS',
    ],
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'johndoe@email.com',
    country: 'Canada',
    tech: ['Assembly', 'Binder Jetting', 'FDM', 'Material jetting', 'Others'],
  },
];

@Component({
  selector: 'app-supplier-selection',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './supplier-selection.component.html',
  styleUrl: './supplier-selection.component.scss',
})
export class SupplierSelectionComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'country', 'tech', 'action'];
  dataSource = new MatTableDataSource<any>(SUPPLIERS);
  selection = new SelectionModel<Suppliers>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Suppliers): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id + 1
    }`;
  }
}
