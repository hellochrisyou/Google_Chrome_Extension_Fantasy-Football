import { Component, OnInit } from '@angular/core';
import { CallApiService } from './service/call-api.service';
import { Option, OptionsGroup } from './interface/interface';
import { FormControl, FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Fantasy Football Chrome Extension';
  checked = false;
  weekSelection: any;
  yearSelection = 0;

  yearControl = new FormControl();
  weekControl = new FormControl();

  weeks = [
    "All",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
  ]
  years = [
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
  ]

  constructor(private fb: FormBuilder, private callService: CallApiService) {

  }

  ngOnInit(): void {
    let dateObj = new Date();
    let currentYear = dateObj.getFullYear();
    for (let i = currentYear - 2019 - 1; i >= 0; i--) {
      this.years.push(currentYear - i);
      console.log(this.years);
    }

  }

  runApi(): void {


    if (this.weekSelection == 'All') {
      this.callService.setQueryString('stats?statType=seasonStats&season=' + this.yearSelection);
      this.callService.callNFLApi();
    } else if (this.weekSelection > 0 && this.yearSelection > 2008) {
      this.callService.setQueryString('stats?statType=weekStats&week=' + this.weekSelection + '&season=' + this.yearSelection);
      this.callService.callNFLApi();
    } else {
      return;
    }
  }
}
