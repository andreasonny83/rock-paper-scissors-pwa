import { TestBed, inject, async, fakeAsync } from '@angular/core/testing';

import { AIService } from './ai.service';
import { Observable } from 'rxjs/Observable';

describe('AIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AIService]
    });
  });

  it('should be created', inject([AIService], (service: AIService) => {
    expect(service).toBeTruthy();
  }));

  it('should generate a random move', inject([AIService], (service: AIService) => {
    const aiMove: IPlayerChose[] = ['Rock', 'Paper', 'Scissors'];
    let reply;

    service.generateRndmReply();
    reply = service.aiMove;
    expect(aiMove).toContain(reply);

    service.generateRndmReply();
    reply = service.aiMove;
    expect(aiMove).toContain(reply);

    service.generateRndmReply();
    reply = service.aiMove;
    expect(aiMove).toContain(reply);
  }));

  describe('checkVictory', () => {
    let result: number;

    it('should generate a tie when the player and the ai generated the same guess',
    inject([AIService], (service: AIService) => {
      service.aiMove = 'Rock';

      result = service.checkVictory('Rock');
      expect(result).toBe(0);

      result = service.checkVictory('Paper');
      expect(result).not.toBe(0);
    }));

    it('rock should win over scissors', inject([AIService], (service: AIService) => {
      service.aiMove = 'Scissors';

      result = service.checkVictory('Rock');
      expect(result).toBe(1);
    }));

    it('rock should loose over paper', inject([AIService], (service: AIService) => {
      service.aiMove = 'Paper';

      result = service.checkVictory('Rock');
      expect(result).toBe(-1);
    }));

    it('paper should win over rock', inject([AIService], (service: AIService) => {
      service.aiMove = 'Rock';

      result = service.checkVictory('Paper');
      expect(result).toBe(1);
    }));

    it('paper should loose over scissors', inject([AIService], (service: AIService) => {
      service.aiMove = 'Scissors';

      result = service.checkVictory('Paper');
      expect(result).toBe(-1);
    }));

    it('scissors should win over paper', inject([AIService], (service: AIService) => {
      service.aiMove = 'Paper';

      result = service.checkVictory('Scissors');
      expect(result).toBe(1);
    }));

    it('scissors should loose over rock', inject([AIService], (service: AIService) => {
      service.aiMove = 'Rock';

      result = service.checkVictory('Scissors');
      expect(result).toBe(-1);
    }));
  });

  describe('Play', () => {
    it('it should return the result of the game', async(inject([AIService], (service: AIService) => {
      service.play('Rock')
        .subscribe(res => {
          expect(res['result']).toBeDefined();
          expect(res['ai']).toBeDefined();
          expect(res['message']).toBeDefined();
        });
    })));
  });
});
