import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/of';

@Injectable()
export class AIService {
  aiMove: IPlayerChose;

  constructor() {
    this.aiMove = <IPlayerChose>null;
  }

  public play(playerMove: IPlayerChose): Observable<any> {
    return new Observable((observer) => {
      // Create a fake delay for increasing the suspense!
      setTimeout(() => {
        this.generateRndmReply();
        observer.next('data to send can be objet or anything');
        observer.complete();
      }, 2000);
    });
  }

  public generateRndmReply(): IPlayerChose {
    const aiOptions: IPlayerChose[] = ['Rock', 'Paper', 'Scissors'];
    const chose: number = Math.floor(Math.random() * 3);
    this.aiMove = aiOptions[chose];
    return aiOptions[chose];
  }

  public checkVictory(playerMove: IPlayerChose): number  {
    let gameResult;

    if (playerMove === this.aiMove) {
      return 0;
    }

    // more logic will follow
    return 0;
  }
}
