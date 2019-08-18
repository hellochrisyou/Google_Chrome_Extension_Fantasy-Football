import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { TE } from '../interface/interface';
import * as globals from '../globals/global';
import { CallApiService } from '../service/call-api.service';
import { NotifyCompleteService } from '../service/notify-complete.service';

@Component({
  selector: 'app-te-table',
  templateUrl: './te-table.component.html',
  styleUrls: ['./te-table.component.scss']
})
export class TeTableComponent implements OnInit {
  wrCol: string[] = globals.wrCol;
  teArray: TE[];
  dataSource: MatTableDataSource<TE>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private notifyCompleteService: NotifyCompleteService
  ) {
  }

  ngOnInit() {
    this.notifyCompleteService.TeDLComplete.subscribe(teArray => {
      this.teArray = teArray;
      this.dataSource = new MatTableDataSource(this.teArray);
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
