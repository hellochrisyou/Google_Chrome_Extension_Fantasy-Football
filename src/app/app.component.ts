import { Component, OnInit } from '@angular/core';
import { CallApiService } from './service/call-api.service';
import { Option, OptionsGroup } from './interface/interface';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Fantasy Football Chrome Extension';
  checked = false;
  selection = '';
  dateOptions: FormGroup;

  dateControl = new FormControl();

  options: OptionsGroup[] = [
    {
      dateType: 'Week',
      option: [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 10 },
        { value: 11 },
        { value: 12 },
        { value: 13 },
        { value: 14 },
        { value: 15 },
        { value: 16 },
        { value: 17 },
      ]
    },
    {
      dateType: 'Year',
      option: [
        { value: 2009 },
        { value: 2010 },
        { value: 2011 },
        { value: 2012 },
        { value: 2013 },
        { value: 2014 },
        { value: 2015 },
        { value: 2016 },
        { value: 2017 },
        { value: 2018 },
        { value: 2019 }
      ]
    },
  ]

  constructor(private fb: FormBuilder, private callService: CallApiService) {
    this.dateOptions = fb.group({
      color: 'accent',
    });
  }

  ngOnInit(): void {
    this.callService.callNFLApi();
  }

  runApi(number: Number): void {
    if (number > 0 && number < 18) {
      this.callService.setQueryString('stats?statType=weekStats&week=' + number);
      this.callService.callNFLApi();
    } else if (number > 2008 && number < 2050) {
      this.callService.setQueryString('stats?statType=seasonStats&season=' + number);
      this.callService.callNFLApi();
    } else {
      return;
    }


  }
}
