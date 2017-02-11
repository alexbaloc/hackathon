import { Observable } from 'rxjs/Rx';
import { PensionService } from './pension.service';
import { SmartContractService } from './smartcontracts.service';
import { TimeService } from './time.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationService {

  constructor(
    private timeService: TimeService,
    private smartContractsService: SmartContractService,
    private pensionService: PensionService) {
  }

  start() {
    this.timeService.play();
  }

}
