import { Injectable } from '@angular/core';
import { QB, RB, WR, TE, Kicker, Defense } from '../../interface/interface';
import { CalcPointsService } from './calc-points.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  tmpQb: QB;
  tmpRb: RB;
  tmpWr: WR;
  tmpTe: TE;
  tmpDef: Defense;
  tmpKicker: Kicker;
  tmpQbArray: QB[] = [];
  tmpRbArray: RB[] = [];
  tmpWrArray: WR[] = [];
  tmpTeArray: TE[] = [];
  tmpDefArray: Defense[] = [];
  tmpKArray: Kicker[] = [];
  constructor(private calculateService: CalcPointsService) { }

  returnQbStats(qbArray: any[]): QB[] {
    for (const qb of qbArray) {
      this.tmpQb = {
        name: '',
        passingYard: 0,
        passingTD: 0,
        interception: 0,
        rushingYard: 0,
        rushingTD: 0,
        fumble: 0,
        points: 0,
      };
      this.tmpQb.name = qb.name;
      qb.stats['5'] != null ? (this.tmpQb.passingYard = qb.stats['5']) : (this.tmpQb.passingYard = 0);
      qb.stats['6'] != null ? (this.tmpQb.passingTD = qb.stats['6']) : (this.tmpQb.passingTD = 0);
      qb.stats['7'] != null ? (this.tmpQb.interception = qb.stats['7']) : (this.tmpQb.interception = 0);
      qb.stats['14'] != null ? (this.tmpQb.rushingYard = qb.stats['14']) : (this.tmpQb.rushingYard = 0);
      qb.stats['15'] != null ? (this.tmpQb.rushingTD = qb.stats['15']) : (this.tmpQb.rushingTD = 0);
      qb.stats['31'] != null ? (this.tmpQb.fumble = qb.stats['31']) : (this.tmpQb.fumble = 0);
      this.tmpQb.points = this.calculateService.calculateQBFantasy(this.tmpQb);

      this.tmpQbArray.push(this.tmpQb);
    }
    return this.tmpQbArray;
  }

  returnRbStats(rbArray: any[]): RB[] {
    for (const rb of rbArray) {
      this.tmpRb = {
        name: '',
        rushingYard: 0,
        rushingTD: 0,
        receivingYard: 0,
        receivingTD: 0,
        fumble: 0,
        points: 0
      };
      this.tmpRb.name = rb.name;
      rb.stats['14'] != null ? (this.tmpRb.rushingYard = rb.stats['14']) : (this.tmpRb.rushingYard = 0);
      rb.stats['15'] != null ? (this.tmpRb.rushingTD = rb.stats['15']) : (this.tmpRb.rushingTD = 0);
      rb.stats['21'] != null ? (this.tmpRb.receivingYard = rb.stats['21']) : (this.tmpRb.receivingYard = 0);
      rb.stats['22'] != null ? (this.tmpRb.receivingTD = rb.stats['22']) : (this.tmpRb.receivingTD = 0);
      rb.stats['31'] != null ? (this.tmpRb.fumble = rb.stats['31']) : (this.tmpRb.fumble = 0);
      this.tmpRb.points = this.calculateService.calculateRBFantasy(this.tmpRb);

      this.tmpRbArray.push(this.tmpRb);
    }
    return this.tmpRbArray;
  }

  returnWrStats(wrArray: any[]): WR[] {
    for (const wr of wrArray) {
      this.tmpWr = {
        name: '',
        receivingYard: 0,
        receivingTD: 0,
        fumble: 0,
        points: 0
      };

      this.tmpWr.name = wr.name;
      wr.stats['21'] != null ? (this.tmpWr.receivingYard = wr.stats['21']) : (this.tmpWr.receivingYard = 0);
      wr.stats['22'] != null ? (this.tmpWr.receivingTD = wr.stats['22']) : (this.tmpWr.receivingTD = 0);
      wr.stats['31'] != null ? (this.tmpWr.fumble = wr.stats['31']) : (this.tmpWr.fumble = 0);
      this.tmpWr.points = this.calculateService.calculateWRFantasy(this.tmpWr);

      this.tmpWrArray.push(this.tmpWr);
    }
    return this.tmpWrArray;
  }

  returnTeStats(teArray: any[]): TE[] {
    for (const te of teArray) {
      this.tmpTe = {
        name: '',
        receivingYard: 0,
        receivingTD: 0,
        fumble: 0,
        points: 0
      };
      this.tmpTe.name = te.name;
      te.stats['21'] != null ? (this.tmpTe.receivingYard = te.stats['21']) : (this.tmpTe.receivingYard = 0);
      te.stats['22'] != null ? (this.tmpTe.receivingTD = te.stats['22']) : (this.tmpTe.receivingTD = 0);
      te.stats['50'] != null ? (this.tmpTe.fumble = te.stats['50']) : (this.tmpTe.fumble = 0);
      this.tmpTe.points = this.calculateService.calculateTEFantasy(this.tmpTe);

      this.tmpTeArray.push(this.tmpTe);
    }
    return this.tmpTeArray;
  }

  returnDefenseStats(defArray: any[]): Defense[] {
    for (const def of defArray) {
      this.tmpDef = {
        name: '',
        TD: 0,
        interception: 0,
        fumblesRecovered: 0,
        blocked: 0,
        safety: 0,
        sack: 0,
        points: 0
      };
      this.tmpDef.name = def.name;
      def.stats['50'] != null ? (this.tmpDef.TD = def.stats['50']) : (this.tmpDef.TD = 0);
      def.stats['46'] != null ? (this.tmpDef.interception = def.stats['46']) : (this.tmpDef.interception = 0);
      def.stats['47'] != null ? (this.tmpDef.fumblesRecovered = def.stats['47']) : (this.tmpDef.fumblesRecovered = 0);
      def.stats['49'] != null ? (this.tmpDef.safety = def.stats['49']) : (this.tmpDef.safety = 0);
      def.stats['45'] != null ? (this.tmpDef.sack = def.stats['45']) : (this.tmpDef.sack = 0);
      def.stats['50'] != null ? (this.tmpDef.blocked = def.stats['50']) : (this.tmpDef.blocked = 0);
      this.tmpDef.points = this.calculateService.calculateDEFFantasy(this.tmpDef);

      this.tmpDefArray.push(this.tmpDef);
    }
    return this.tmpDefArray;
  }

  returnKickerStats(kArray: any[]): Kicker[] {
    let addCount = 0;
    let missCount = 0;
    for (const kicker of kArray) {
      this.tmpKicker = {
        name: '',
        PAT: 0,
        fg0To39: 0,
        fg40To49: 0,
        fg50Plus: 0,
        missFG0To39: 0,
        missFG40To49: 0,
        points: 0
      };
      this.tmpKicker.name = kicker.name;
      kicker.stats['33'] != null ? (this.tmpKicker.PAT = parseInt(kicker.stats['33'])) : (this.tmpKicker.PAT = 0);
      if (kicker.stats['35'] != null) {
        addCount += parseInt(kicker.stats['35']);
      }
      if (kicker.stats['36'] != null) {
        addCount += parseInt(kicker.stats['36']);
      }
      if (kicker.stats['37'] != null) {
        addCount += parseInt(kicker.stats['37']);
      }
      this.tmpKicker.fg0To39 = addCount;
      kicker.stats['38'] != null ? (this.tmpKicker.fg40To49 = parseInt(kicker.stats['38'])) : (this.tmpKicker.fg40To49 = 0);
      kicker.stats['39'] != null ? (this.tmpKicker.fg50Plus = parseInt(kicker.stats['39'])) : (this.tmpKicker.fg50Plus = 0);
      if (kicker.stats['41'] != null) {
        missCount += parseInt(kicker.stats['41']);
      }
      if (kicker.stats['42'] != null) {
        missCount += parseInt(kicker.stats['42']);
      }
      this.tmpKicker.missFG0To39 = missCount;
      kicker.stats['43'] != null ? (this.tmpKicker.missFG40To49 = parseInt(kicker.stats['43'])) : (this.tmpKicker.missFG40To49 = 0);
      this.tmpKicker.points = this.calculateService.calculateKickerFantasy(this.tmpKicker);

      this.tmpKArray.push(this.tmpKicker);
    }
    return this.tmpKArray;
  }
}
