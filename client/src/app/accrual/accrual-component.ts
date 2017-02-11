
import { Component } from '@angular/core';

@Component({
  selector: 'accrual',
  templateUrl: './accrual.component.html',
  styleUrls: ['./accrual.component.css']
})
export class AccrualComponent {

  smartcontracts = [
    {
      color: [
        {
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: '#e74c3c',
          pointBackgroundColor: '#e74c3c',
          pointBorderColor: '#e74c3c',
          pointHoverBackgroundColor: '#e74c3c',
          pointHoverBorderColor: '#e74c3c'
        }
      ],
      data: [{ data: [200, 300, 400, 500, 600, 700, 800], label: 'Smartcontract 1' }],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
    {
      color: [
        {
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: '#2ecc71',
          pointBackgroundColor: '#2ecc71',
          pointBorderColor: '#2ecc71',
          pointHoverBackgroundColor: '#2ecc71',
          pointHoverBorderColor: '#2ecc71'
        }
      ],
      data: [{ data: [200, 300, 400, 500, 600, 700, 800], label: 'Smartcontract 2' }],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
    {
      color: [
        {
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: '#3498db',
          pointBackgroundColor: '#3498db',
          pointBorderColor: '#3498db',
          pointHoverBackgroundColor: '#3498db',
          pointHoverBorderColor: '#3498db'
        }
      ],
      data: [{ data: [200, 300, 400, 500, 600, 700, 800], label: 'Smartcontract 3' }],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    }
  ];

  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

}
