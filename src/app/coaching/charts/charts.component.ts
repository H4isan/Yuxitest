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
  private datasets = [
    {
      data: [0, 0]
    }
  ];
  sectionText: string[];
  public lineChartColors: Array<any> = [
      {backgroundColor: [
          '#1aaf5d',
          '#f2c500'
        ]
      }
  ];
  constructor() { }

  ngOnInit() {
     this.datasets = [
        {
          data: [this.arrayChallenge.val1 , this.arrayChallenge.val2]
        }
      ];
      if (this.arrayChallenge.typeChart) {
        this.doughnutChartLabels = ['To Review', 'Entrie submit'];
      }else {
        this.doughnutChartLabels = ['Complete', 'To complete'];
      }
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
