import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/typings';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-table-mychallenges',
  templateUrl: './table-mychallenges.component.html',
  styleUrls: ['./table-mychallenges.component.css']
})
export class TableMychallengesComponent implements OnInit {

  currentpage = 1;
  temp: any[];
  myChallengesResults;

  @ViewChild('filter') filter: ElementRef;
  private _dataMyChallenges = new BehaviorSubject<any[]>([]);
  @Input()
  set arrayChallenge(value) {
    this._dataMyChallenges.next(value);
  }
  get arrayChallenge() {
    return this._dataMyChallenges.getValue();
  }
  constructor() { }

  ngOnInit() {

    this._dataMyChallenges
      .subscribe((dataChallenges: any) => {
        this.temp = [...dataChallenges];
        this.myChallengesResults = dataChallenges;
      });

    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(() => {
        if (this.filter.nativeElement.value) {
          const val = this.filter.nativeElement.value.toLowerCase();
          const temp = this.temp.filter(function (challenges) {
            return challenges.challengeName.toLowerCase().indexOf(val) !== -1 || !val;
          });
          this.myChallengesResults = temp;
        } else {
          this.myChallengesResults = this.temp;
        }
      });

  }
  sortData(sort: Sort) {
    const data = this.arrayChallenge.slice();
    if (!sort.active || sort.direction === '') {
      this.arrayChallenge = data;
      return;
    }

    this.arrayChallenge = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return compare(a.title, b.title, isAsc);
        case 'createby': return compare(+a.createby, +b.createby, isAsc);
        case 'avgScore': return compare(+a.avgScore, +b.avgScore, isAsc);
        case 'invited': return compare(+a.invited, +b.invited, isAsc);
        case 'completed': return compare(+a.completed, +b.completed, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}