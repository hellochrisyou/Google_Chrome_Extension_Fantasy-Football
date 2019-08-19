import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StatsService } from './logic/stats.service';
import * as globals from '../globals/global';
import { QB, RB, WR, TE, Defense, Kicker } from '../interface/interface';
import { HttpClient } from '@angular/common/http';
import { NotifyCompleteService } from './notify-complete.service';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  qbArray: QB[] = [];
  rbArray: RB[] = [];
  wrArray: WR[] = [];
  teArray: TE[] = [];
  defenseArray: Defense[] = [];
  kickerArray: Kicker[] = [];
  queryString = '';

  constructor(
    public http: HttpClient,
    public statsFunctionService: StatsService,
    public api: ApiService,
    public notifyCompleteService: NotifyCompleteService
  ) {
  }

  callNFLApi(): void {
    this.getSeasonQB();
    this.getSeasonRB();
    this.getSeasonWR();
    this.getSeasonTE();
    this.getSeasonDefense();
    this.getSeasonKicker();
  }

  getSeasonQB(): void {
    this.qbArray = [];
    this.api.httpGet(globals.ApiUrls.season + this.queryString + '&position=QB').subscribe(
      data => {
        this.qbArray = this.statsFunctionService.returnQbStats(data.players);
        this.notifyCompleteService.sendQBs(this.qbArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  getSeasonRB(): void {
    this.rbArray = [];
    this.api.httpGet(globals.ApiUrls.season + this.queryString + '&position=RB').subscribe(
      data => {
        this.rbArray = this.statsFunctionService.returnRbStats(data.players);
        this.notifyCompleteService.sendRBs(this.rbArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  getSeasonWR(): void {
    this.wrArray = [];
    this.api.httpGet(globals.ApiUrls.season + this.queryString + '&position=WR').subscribe(
      data => {
        this.wrArray = this.statsFunctionService.returnWrStats(data.players);
        this.notifyCompleteService.sendWRs(this.wrArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  getSeasonTE(): void {
    this.teArray = [];
    this.api.httpGet(globals.ApiUrls.season + this.queryString + '&position=TE').subscribe(
      data => {
        this.teArray = this.statsFunctionService.returnTeStats(data.players);
        this.notifyCompleteService.sendTEs(this.teArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  getSeasonDefense(): void {
    this.defenseArray = [];
    this.api.httpGet(globals.ApiUrls.season + this.queryString + '&position=DEF').subscribe(
      data => {
        this.defenseArray = this.statsFunctionService.returnDefenseStats(data.players);
        this.notifyCompleteService.sendDefenses(this.defenseArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  getSeasonKicker(): void {
    this.kickerArray = [];
    this.api.httpGet(globals.ApiUrls.season + this.queryString + '&position=K').subscribe(
      data => {
        this.kickerArray = this.statsFunctionService.returnKickerStats(data.players);
        this.notifyCompleteService.sendKickers(this.kickerArray);
      },
      err => {
        console.log(err);
      }
    );
  }

  getQBs(): QB[] {
    return this.qbArray;
  }
  getRBs(): RB[] {
    return this.rbArray;
  }
  getWRs(): WR[] {
    return this.wrArray;
  }
  getTEs(): TE[] {
    return this.teArray;
  }
  getDefenses(): Defense[] {
    return this.defenseArray;
  }
  getKickers(): Kicker[] {
    return this.kickerArray;
  }
  setQueryString(value: string): void {
    this.queryString = value;
  }
}
