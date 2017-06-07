import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AIService {
  aiMove: IPlayerChose;

  constructor() { }

  public play(playerMove: IPlayerChose): Observable<any> {
    return new Observable((observer) => {
      // Create a fake delay for increasing the suspense!
      setTimeout(() => {
        this.generateRndmReply();
        const result = this.checkVictory(playerMove);
        observer.next({
          result: result,
          ai: this.aiMove,
          message: this.generateMessage(result),
        });

        observer.complete();
      }, 2000);
    });
  }

  public generateRndmReply(): void {
    const aiOptions: IPlayerChose[] = ['Rock', 'Paper', 'Scissors'];
    const chose: number = Math.floor(Math.random() * 3);

    this.aiMove = aiOptions[chose];
  }

  public checkVictory(playerMove: IPlayerChose): number  {
    let gameResult;

    if (playerMove === this.aiMove) {
      return 0;
    }

    switch(playerMove) {
      case 'Rock':
        gameResult = this.aiMove === 'Scissors' ? 1 : -1;
        break;
      case 'Paper':
        gameResult = this.aiMove === 'Rock' ? 1 : -1;
        break;
      case 'Scissors':
        gameResult = this.aiMove === 'Paper' ? 1 : -1;
        break;
      default: gameResult = -1;
    }

    return gameResult;
  }

  private generateMessage(outcome: number) {
    if (outcome === 0) {
      return 'That was a tie!';
    }

    if (outcome === 1) {
      return `You're the winner!`;
    }

    return `You have been defeated!`;
  }
}
