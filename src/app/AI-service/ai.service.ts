import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/of';

@Injectable()
export class AIService {
  constructor() { }

  public play(playerMove: IPlayerChose): Observable<any> {
    return new Observable((observer) => {
      // Create a fake delay for increasing the suspense!
      setTimeout(() => {
        this.generateReply(playerMove);
        observer.next('data to send can be objet or anything');
        observer.complete();
      }, 2000);
    });
  }

  private generateReply(playerMove: IPlayerChose) {
    const aiMove: IPlayerChose[] = ['Rock', 'Paper', 'Scissors'];
    const chose: number = Math.floor(Math.random() * 3) + 1;

    return aiMove[chose];
  }
}
