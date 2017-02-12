import { TimeService } from './time.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class SmartContractService {

  constructor(private http: Http, private timeService: TimeService) {
  }

  getSmartContracts() {
    return this.http
      .get('http://localhost:3000/contract')
      .map(response => response.json())
      .map(contracts => this.calculateSavings(contracts));
  }

  create(contract) {
    contract.accrual = parseFloat(contract.accrual);
    contract.startDate = moment(contract.startDateUI).unix() * 1000;
    return this.http.post('http://localhost:3000/contract/create', contract);
  }

  close(contract) {
    contract.date = moment(contract.dateUI).unix() * 1000;
    return this.http.post('http://localhost:3000/contract/close', contract);
  }

  calculateSavings(contracts) {
    contracts.forEach(contract => {
      const pensionBase = contract.salary - contract.franchise;
      const endDate = contract.endDate ? moment(contract.endDate).startOf('day') : this.timeService.getCurrentDate();
      const nrOfyears = endDate.diff(moment(contract.startDate), 'years', true);
      let savings = nrOfyears * pensionBase * contract.accrual;
      if (nrOfyears < 0) {
        savings = 0;
      }
      contract.totalSavings = savings;
    });
    return contracts;
  }
}
