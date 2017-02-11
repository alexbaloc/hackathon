import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SmartContractService {

  private contracts: Array<any> = [];

  constructor(private http: Http) {
  }

  refreshSmartContracts() {
    return this.http
      .get('http:localhost:3000/api/smartcontracts')
      .map(response => response.json())
      .map(contracts => this.contracts = contracts);
  }

  getSmartContracts() {
    return this.contracts;
  }

}
