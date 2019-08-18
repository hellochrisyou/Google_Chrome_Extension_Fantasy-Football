import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Defense } from '../interface/interface';
import * as globals from '../globals/global';
import { CallApiService } from '../service/call-api.service';
import { NotifyCompleteService } from '../service/notify-complete.service';

@Component({
  selector: 'app-defense-table',
  templateUrl: './defense-table.component.html',
  styleUrls: ['./defense-table.component.scss']
})
export class DefenseTableComponent implements OnInit {
  defenseCol: string[] = globals.defenseCol;
  defenseArray: Defense[];
  dataSource: MatTableDataSource<Defense>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private notifyCompleteService: NotifyCompleteService
  ) { }

  ngOnInit() {
    this.notifyCompleteService.DefenseDLComplete.subscribe(defenseArray => {
      this.defenseArray = defenseArray;
      this.dataSource = new MatTableDataSource(this.defenseArray);
      console.log('defense', defenseArray);
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
