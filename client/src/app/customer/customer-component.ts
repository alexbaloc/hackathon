import { TimeService } from './../services/time.service';
import { SmartContractService } from './../services/smartcontracts.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent extends OnInit {

  customer = {
    currentIncome: 0,
    pensionToday: 0,
    pensionExpected: 0,
    health: 'good'
  };

  constructor(private smartContractService: SmartContractService, private timeService: TimeService) {
    super();
  }

  ngOnInit() {
    this.timeService
      .getApplicationObservable().subscribe(() => {
        this.smartContractService
          .getSmartContracts()
          .subscribe(smartContracts => {
            this.calculateTotals(smartContracts);
          });
      });
  }

  calculateTotals(smartContracts: Array<any>) {
    let sum = 0;
    smartContracts.forEach(contract => {
      sum += contract.totalSavings;
    });
    this.customer.currentIncome = smartContracts.find(contract => !contract.endDate).salary;
    this.customer.pensionToday = sum;
    this.customer.pensionExpected = 2000;
  }

  messages = [];

  chatBotInput: string = '';

  respondToComment() {
    this.messages.push({ sender: 'me', message: this.chatBotInput });

    if (this.chatBotInput === 'I got married') {
      this.messages.push({
        sender: 'bot',
        message: 'Better start saving.'
      });
    } else if (this.chatBotInput === 'I changed jobs') {
      this.messages.push({
        sender: 'bot',
        message: 'Make it rain, son.'
      });
    } else {
      this.messages.push({
        sender: 'bot',
        message: 'I have no idea what you\'re saying'
      });
    }
    this.chatBotInput = '';
  }

}
