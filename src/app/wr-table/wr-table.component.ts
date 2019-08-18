import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { WR } from '../interface/interface';
import * as globals from '../globals/global';
import { CallApiService } from '../service/call-api.service';
import { NotifyCompleteService } from '../service/notify-complete.service';

@Component({
  selector: 'app-wr-table',
  templateUrl: './wr-table.component.html',
  styleUrls: ['./wr-table.component.scss']
})
export class WrTableComponent implements OnInit {
  wrCol: string[] = globals.wrCol;
  wrArray: WR[];
  dataSource: MatTableDataSource<WR>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private notifyCompleteService: NotifyCompleteService
  ) {
  }

  ngOnInit() {
    this.notifyCompleteService.WrDLComplete.subscribe(wrArray => {
      this.wrArray = wrArray;

      console.log('wr');
      this.dataSource = new MatTableDataSource(this.wrArray);
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
