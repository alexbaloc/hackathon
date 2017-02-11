
import { Component } from '@angular/core';

@Component({
  selector: 'employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent {

  smartcontracts = [
    {
      parameters: {
        x: 10,
        y: 11,
        z: 12
      }
    },
    {
      parameters: {
        x: 13,
        y: 14,
        z: 15
      }
    },
    {
      parameters: {
        x: 16,
        y: 17,
        z: 18
      }
    }
  ]
}
