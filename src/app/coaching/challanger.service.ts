import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Challenges } from './interface/Challenges.interface';
@Injectable()
export class ChallangerService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'https://raw.githubusercontent.com/H4isan/custom_libs/master/TeamChallenges.json';  // URL to web api
  private heroesUrl2 = 'https://raw.githubusercontent.com/H4isan/custom_libs/master/MyChallenges.json';  // URL to web api

  constructor(private http: Http) { }
  getMyChallenger(): Observable<Challenges[]> {
    return this.http.get(this.heroesUrl2)
    .map( (res: Response) => res.json() as Challenges[]);
  }
  getTeamChallenger(): Observable<Challenges[]> {
    return this.http.get(this.heroesUrl)
    .map( (res: Response) => res.json() as Challenges[]);
  }

}
