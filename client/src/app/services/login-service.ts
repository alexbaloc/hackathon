import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
  }

  doLoginForEmployer(user): Observable<any> {
    return this.http
      .post('localhost:3000/company/login', user)
      .map(response => response.json());
  }

  doLoginForCustomer(user) {
    return this.http
      .post('localhost:3000/customer/login', user)
      .map(response => response.json());
  }


}
