import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class TimeService {

  private currentDate;
  public paused = true;
  private applicationObservable: Observable<void>;

  constructor() {
    this.currentDate = moment('2017-03-01');
    this.start();
  }

  progressOneMonth() {
    this.currentDate.add(1, 'M');
    console.log(this.currentDate.toString());
  }

  getCurrentDate() {
    return this.currentDate;
  }

  start() {
    this.applicationObservable = Observable
      .interval(5000)
      .takeWhile(() => !this.paused)
      .map(() => this.progressOneMonth());

    return this.applicationObservable;
  }

  play() {
    this.paused = false;
  }

  pause() {
    this.paused = true;
  }

  getApplicationObservable(): Observable<void> {
    return this.applicationObservable;
  }

}
