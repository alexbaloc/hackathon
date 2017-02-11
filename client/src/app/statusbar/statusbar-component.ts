import { Observable } from 'rxjs/Rx';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.css']
})
export class StatusbarComponent extends OnInit {

  blocks = [
    { color: '#e74c3c' },
    { color: '#e74c3c' },
    { color: '#e74c3c' },
    { color: '#e74c3c' },
    { color: '#e74c3c' },
    { color: '#2ecc71' },
    { color: '#2ecc71' },
    { color: '#2ecc71' },
    { color: '#2ecc71' },
    { color: '#3498db' },
    { color: '#3498db' },
    { color: '#3498db' },
    { color: '#3498db' },
    { color: '#3498db' }
  ];

  constructor() {
    super();
  }

  ngOnInit() {
    // Observable
    //   .interval(1000)
    //   .subscribe(() => {
    //     this.blocks.push({ color: '#3498db' });
    //   })
  }

}
