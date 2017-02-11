import { SmartContractService } from './../services/smartcontracts.service';
import { TimeService } from './../services/time.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent extends OnInit {

  smartcontracts = [];

  constructor(private timeService: TimeService, private smartContractService: SmartContractService) {
    super();
  }

  ngOnInit() {
    this.timeService
      .getApplicationObservable()
      .subscribe(() => this.propagateChange());
  }

  propagateChange() {
    this.smartContractService.getSmartContracts()
      .subscribe(contracts => this.smartcontracts = contracts);
  }

}
