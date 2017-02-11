import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(private http: Http) {
  }

  login(user, role: string): Observable<any> {
    return this.http
      .post('http://localhost:3000/' + role + '/login', user, {})
      .map(response => response.json());
  }

}
