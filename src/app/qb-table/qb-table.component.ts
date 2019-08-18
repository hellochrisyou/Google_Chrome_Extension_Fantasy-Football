import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { QB } from '../interface/interface';
import * as globals from '../globals/global';
import { CallApiService } from '../service/call-api.service';
import { NotifyCompleteService } from '../service/notify-complete.service';

@Component({
  selector: 'app-qb-table',
  templateUrl: './qb-table.component.html',
  styleUrls: ['./qb-table.component.scss']
})
export class QbTableComponent implements OnInit {
  qbCol: string[] = globals.qbCol;
  qbArray: QB[];
  dataSource: MatTableDataSource<QB>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private notifyCompleteService: NotifyCompleteService
  ) {
  }

  ngOnInit() {
    this.notifyCompleteService.QbDLComplete.subscribe(qbArray => {
      this.qbArray = qbArray;
      console.log('qb', qbArray);
      this.dataSource = new MatTableDataSource(this.qbArray);
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
