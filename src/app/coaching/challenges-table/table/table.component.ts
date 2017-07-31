import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/typings';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  currentpage = 1;
  temp: any[];
  teamChallengesResults;
  @ViewChild('filter') filter: ElementRef;
  private _dataTeamChallenges = new BehaviorSubject<any[]>([]);
  @Input()
  set arrayChallenge(value) {
    this._dataTeamChallenges.next(value);
  }
  get arrayChallenge() {
    return this._dataTeamChallenges.getValue();
  }
  constructor() { }

  ngOnInit() {
    this._dataTeamChallenges
      .subscribe((dataChallenges: any) => {
        this.temp = [...dataChallenges];
        this.teamChallengesResults = dataChallenges;
      });

    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(() => {
        if (this.filter.nativeElement.value) {
          const inputValue = this.filter.nativeElement.value.toLowerCase();
          const temp = this.temp.filter(function (challenges) {
            return challenges.name.toLowerCase().indexOf(inputValue) !== -1 || !inputValue;
          });
          this.teamChallengesResults = temp;
        } else {
          this.teamChallengesResults = this.temp;
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
        case 'modified': return compare(+a.modified, +b.modified, isAsc);
        case 'invited': return compare(+a.invited, +b.invited, isAsc);
        case 'entries': return compare(+a.entries, +b.entries, isAsc);
        case 'toreview': return compare(+a.toreview, +b.toreview, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}