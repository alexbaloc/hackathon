import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class TimeService {

  private currentDate;
  public paused = true;
  private applicationObservable: Observable<any>;

  constructor() {
    this.currentDate = moment('2017-03-01');
    this.start();
  }

  progressOneMonth() {
    this.currentDate.add(1, 'M');
  }

  getCurrentDate() {
    return this.currentDate;
  }

  start() {
    this.applicationObservable = Observable.interval(5000)
      .filter(() => !this.paused)
      .map(() => this.progressOneMonth())
      .share();
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

  isPaused() {
    return this.paused;
  }

}
