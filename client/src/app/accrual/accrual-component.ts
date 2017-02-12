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

  newContract = {};
  successMessage = null;

  closeContract = {};
  closeMessage = null;

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

  togglePause() {
    if (this.isPaused()) {
      this.timeService.play();
    } else {
      this.timeService.pause();
    }
  }

  isPaused() {
    return this.timeService.isPaused();
  }

  propagateChange() {
  }

  getCurrentTime() {
    return this.timeService.getCurrentDate().toDate();
  }

  addContract() {
    this.successMessage = "";
    this.smartContractService
      .create(this.newContract)
      .subscribe(
      () => this.successMessage = 'Gelukt!',
      error => this.successMessage = JSON.stringify(error)
      );
  }

  terminateContract() {
    this.closeMessage = "";
    this.smartContractService
      .close(this.closeContract)
      .subscribe(
      () => this.closeMessage = 'Gelukt!',
      error => this.closeMessage = JSON.stringify(error)
      );
  }
}
