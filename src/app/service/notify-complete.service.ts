import { Injectable, Output, EventEmitter } from '@angular/core';
import { Kicker, QB, RB, WR, TE, Defense } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class NotifyCompleteService {
  @Output() QbDLComplete: EventEmitter<QB[]> = new EventEmitter();
  @Output() RbDLComplete: EventEmitter<RB[]> = new EventEmitter();
  @Output() WrDLComplete: EventEmitter<WR[]> = new EventEmitter();
  @Output() TeDLComplete: EventEmitter<TE[]> = new EventEmitter();
  @Output() DefenseDLComplete: EventEmitter<Defense[]> = new EventEmitter();
  @Output() KickerDLComplete: EventEmitter<Kicker[]> = new EventEmitter();

  sendQBs(qbArray: QB[]): void {
    this.QbDLComplete.emit(qbArray);
  }
  sendRBs(rbArray: RB[]): void {
    this.RbDLComplete.emit(rbArray);
  }
  sendWRs(wrArray: WR[]): void {
    this.WrDLComplete.emit(wrArray);
  }
  sendTEs(teArray: TE[]): void {
    this.TeDLComplete.emit(teArray);
  }
  sendDefenses(defenseArray: Defense[]): void {
    this.DefenseDLComplete.emit(defenseArray);
  }
  sendKickers(kickerArray: Kicker[]): void {
    this.KickerDLComplete.emit(kickerArray);
  }
  constructor() { }
}
