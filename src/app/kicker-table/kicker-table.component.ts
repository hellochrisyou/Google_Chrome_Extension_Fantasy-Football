import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Kicker } from '../interface/interface';
import * as globals from '../globals/global';
import { CallApiService } from '../service/call-api.service';
import { NotifyCompleteService } from '../service/notify-complete.service';

@Component({
  selector: 'app-kicker-table',
  templateUrl: './kicker-table.component.html',
  styleUrls: ['./kicker-table.component.scss']
})
export class KickerTableComponent implements OnInit {
  kickerCol: string[] = globals.kickerCol;
  kickerArray: Kicker[];
  dataSource: MatTableDataSource<Kicker>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private notifyCompleteService: NotifyCompleteService
  ) {
  }

  ngOnInit() {
    this.notifyCompleteService.KickerDLComplete.subscribe(kickerArray => {
      this.kickerArray = kickerArray;
      console.log('kicker');
      this.dataSource = new MatTableDataSource(this.kickerArray);
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
