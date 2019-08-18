import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { RB } from '../interface/interface';
import * as globals from '../globals/global';
import { CallApiService } from '../service/call-api.service';
import { NotifyCompleteService } from '../service/notify-complete.service';

@Component({
  selector: 'app-rb-table',
  templateUrl: './rb-table.component.html',
  styleUrls: ['./rb-table.component.scss']
})
export class RbTableComponent implements OnInit {
  rbCol: string[] = globals.rbCol;
  rbArray: RB[];
  dataSource: MatTableDataSource<RB>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private notifyCompleteService: NotifyCompleteService
  ) {
  }

  ngOnInit() {
    this.notifyCompleteService.RbDLComplete.subscribe(rbArray => {
      this.rbArray = rbArray;
      this.dataSource = new MatTableDataSource(this.rbArray);
      console.log('rb');
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
