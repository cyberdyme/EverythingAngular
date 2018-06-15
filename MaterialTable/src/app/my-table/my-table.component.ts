import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import {MyTableDataSource, MyTableItem} from './my-table-datasource';





@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MyTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  dynamicColumns = [
    { columnDef: 'id',    header: 'ID',       cell: (row: MyTableItem) => `${row['id']}`        },
    { columnDef: 'name',  header: 'Name',     cell: (row: MyTableItem) => `${row['name']}`      }
  ];


  ngOnInit() {
    this.dataSource = new MyTableDataSource(this.paginator, this.sort);
  }

  getPropertyValue(row: MyTableItem, property: string): any {
    return row[property];
  }
}
