import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChallengeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'https://raw.githubusercontent.com/H4isan/custom_libs/master/TeamChallenges.json';  // URL to web api
  private heroesUrl2 = 'https://raw.githubusercontent.com/H4isan/custom_libs/master/MyChallenges.json';  // URL to web api

  constructor(private http: Http) { }
  getMyChallenger(): Observable<any[]>{
    return this.http.get(this.heroesUrl2)
    .map( (x) => x.json())
  }
  getTeamChallenger(): Observable<any[]>{
    return this.http.get(this.heroesUrl2)
    .map( (x) => x.json());
  }

  // getHeroes()  {
  //   this.http.get(this.heroesUrl)
  //   .map(x =>{
  //     const arr = x.json();
  //     Object.keys(arr.results).reduce((sum, key) => sum + arr.results[key].numberToReview, 0);
  //     Object.keys(arr.results).reduce((sum, key) => sum + arr.results[key].numberOfEntries, 0);
    
  //     return arr} )
  //   .subscribe( (a) => {

  //     this.challengeResult = a.results;
  //     console.log( this.challengeResult );
  //   });

  // }
}
