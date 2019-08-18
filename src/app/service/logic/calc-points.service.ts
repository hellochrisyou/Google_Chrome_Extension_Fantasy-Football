import { Injectable } from '@angular/core';
import { QB, RB, WR, TE, Kicker, Defense } from '../../interface/interface';
import { wrCol } from '../../globals/global';

@Injectable({
  providedIn: 'root'
})
export class CalcPointsService {

  fantasyPoints = 0;
  pointsAllowed = 0;

  calculateQBFantasy(qb: QB): number {
    this.fantasyPoints =
      qb.passingYard / 25 -
      qb.passingTD * 4 +
      qb.interception * 2 +
      qb.rushingYard / 10 +
      qb.rushingTD * 6 -
      qb.fumble * 2;
    return Number.parseFloat(parseInt(this.fantasyPoints.toString(), 10).toFixed(2));
  }
  calculateRBFantasy(rb: RB): number {
    this.fantasyPoints =
      rb.rushingYard / 10 +
      rb.rushingTD * 6 +
      rb.receivingYard / 10 +
      rb.receivingTD * 6 -
      rb.fumble * 2;
    return Number.parseFloat(parseInt(this.fantasyPoints.toString(), 10).toFixed(2));
  }
  calculateWRFantasy(wr: WR): number {
    this.fantasyPoints = wr.receivingYard / 10 + wr.receivingTD * 6 - wr.fumble * 2;
    return Number.parseFloat(parseInt(this.fantasyPoints.toString(), 10).toFixed(2));
  }
  calculateTEFantasy(te: TE): number {
    this.fantasyPoints = te.receivingYard / 10 + te.receivingTD * 6 - te.fumble * 2;
    return Number.parseFloat(parseInt(this.fantasyPoints.toString(), 10).toFixed(2));
  }
  calculateDEFFantasy(def: Defense): number {
    this.fantasyPoints =
      def.TD * 3 + def.interception * 2 + def.fumblesRecovered * 2 + def.blocked * 2 + def.safety * 2 + def.sack * 1;
    return Number.parseFloat(parseInt(this.fantasyPoints.toString(), 10).toFixed(2));
  }
  calculateKickerFantasy(kicker: Kicker): number {
    this.fantasyPoints =
      kicker.PAT +
      kicker.fg0To39 * 3 +
      kicker.fg40To49 * 4 +
      kicker.fg50Plus * 5 -
      kicker.missFG0To39 * 2 -
      kicker.missFG40To49 * 1;
    return Number.parseFloat(parseInt(this.fantasyPoints.toString(), 10).toFixed(2));
  }
}
