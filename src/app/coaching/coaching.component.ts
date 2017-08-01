import { Component, OnInit, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Sort } from '@angular/material/typings';
import {ChallangerService} from './service/challanger.service';
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
  constructor(private http: Http, private challangerService: ChallangerService) { }

  ngOnInit() {
    this.challangerService.getTeamChallenger().subscribe((data: any) => {
      const dataResult = data.results;
      let totalnumberEntries = Object.keys(dataResult).reduce((sum, key) => sum + dataResult[key].numberOfEntries, 0);
      const totalreviewed =  Object.keys(dataResult).reduce((sum, key) => sum + dataResult[key].numberToReview, 0) -  Object.keys(dataResult).reduce((sum, key) => sum + dataResult[key].numberReviewed, 0);
      totalnumberEntries = totalnumberEntries - totalreviewed;
      this.challengeChart = {
        val1 : totalreviewed,
        val2 : totalnumberEntries,
        typeChart: true};
      this.challengeResult = dataResult;
    });
    this.getmyChallengesData();

  }
  getmyChallengesData(): void {
      this.challangerService.getMyChallenger()
      .subscribe((data: any) => {
        const dataResult = data.results;
        this.challengeResult2 = dataResult;
        const lenghtChallenges = data.results.length;
        let countCompletedDates = 0;
        let avgScore = 0;
        dataResult.forEach((element: any) => {
            countCompletedDates = element.completedDate ? countCompletedDates + 1 : countCompletedDates ;
            avgScore = avgScore + element.overallScore;
        });
        const countTocomplete = lenghtChallenges - countCompletedDates;
        const AvgScore = avgScore / countCompletedDates;
        this.challengeChart2 = { val1: countTocomplete, val2: countCompletedDates, typeChart: false , avgScore : AvgScore };
      });
  }
}
