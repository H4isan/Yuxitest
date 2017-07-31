import { Component, OnInit, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Sort } from '@angular/material/typings';
import {ChallangerService} from './challanger.service';
import {Challenges} from './interface/challenges.interface';
@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.css']
})

export class CoachingComponent implements OnInit {

  challengeResult;
  challengeChart;
  challengeChart2;
  challengeResult2;
  columnTitle;
  @Output() selectChange;
  constructor(private http: Http, private challangerService: ChallangerService) { }

  ngOnInit() {
    this.columnTitle = ['Title', 'Create By', 'Modified', 'Invented', 'Entries', 'To review', 'Actions'];
    this.challangerService.getTeamChallenger().subscribe((data: any) => {
      const dataResult = data.results;

      // tslint:disable-next-line:max-line-length
      this.challengeChart = {
        val1 : Object.keys(dataResult).reduce((sum, key) => sum + dataResult[key].numberToReview, 0),
        val2 : Object.keys(dataResult).reduce((sum, key) => sum + dataResult[key].numberOfEntries, 0),
        typeChart: true};
      this.challengeResult = dataResult;
    });
    this.getmyChallengesData();

  }
  handleUserUpdated(s) {
    if (s.index === 1) {

    }else {

    }
  }
  getmyChallengesData(): void {
      this.challangerService.getMyChallenger().subscribe((data: any) => {
        const dataResult = data.results;
        this.challengeResult2 = dataResult;
        const lenghtChallenges = data.results.length;
        let countCompletedDates = 0;
        let avgScore = 0;
        dataResult.forEach((element: any) => {
            countCompletedDates = element.completedDate ? countCompletedDates + 1 : countCompletedDates ;
            avgScore = avgScore + element.overallScore;
        });
        const falta = lenghtChallenges - countCompletedDates;
        const AvgScore = avgScore / lenghtChallenges;
        this.challengeChart2 = { val1: countCompletedDates, val2: falta, typeChart: false , avgScore : AvgScore };
      });
  }
}
