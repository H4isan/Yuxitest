import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @Input() arrayChallenge;
  // Doughnut
  doughnutChartLabels: string[] = [' ', ' '];
  doughnutChartType: string = 'doughnut';
  datasets = [];
  sectionText: string[];
  barChartOptions: any = {
  legend: { display: false }
  };
  lineChartColors: Array<any> = [
    {
      backgroundColor: [
        '#1aaf5d',
        '#f2c500'
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
    this.datasets = [
      {
        data: [this.arrayChallenge.val1, this.arrayChallenge.val2]
      }
    ];
    if (this.arrayChallenge.typeChart) {
      this.doughnutChartLabels = ['To Review', 'Entrie submit'];
    } else {
      this.doughnutChartLabels = ['To complete', 'Complete' ];
    }
  }

  // events
  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }
}
