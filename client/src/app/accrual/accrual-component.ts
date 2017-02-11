import { SmartContractService } from './../services/smartcontracts.service';
import { TimeService } from './../services/time.service';

import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'accrual',
  templateUrl: './accrual.component.html',
  styleUrls: ['./accrual.component.css']
})
export class AccrualComponent extends OnInit {

  constructor(private timeService: TimeService, private smartContractService: SmartContractService) {
    super();
  }

  ngOnInit() {
    this.timeService
      .getApplicationObservable()
      .subscribe(
      () => this.propagateChange()
      );
  }

  pause() {
    this.timeService.pause();
  }

  play() {
    this.timeService.play();
  }

  propagateChange() {
  }

  getCurrentTime() {
    return this.timeService.getCurrentDate().toDate();
  }

}
