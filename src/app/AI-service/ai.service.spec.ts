import { TestBed, inject } from '@angular/core/testing';

import { AIService } from './ai.service';

fdescribe('AIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AIService]
    });
  });

  it('should be created', inject([AIService], (service: AIService) => {
    expect(service).toBeTruthy();
  }));

  fit('should generate a random move', inject([AIService], (service: AIService) => {
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

  describe('checkVictory', inject([AIService], (service: AIService) => {
    it('It should generate a tie when the player and the ai generated the same guess', () => { });
    it('rock should win over scissors', () => { });
    it('rock should loose over paper', () => { });
    it('paper should win over rock', () => { });
    it('paper should loose over scissors', () => { });
    it('scissors should win over paper', () => { });
    it('scissors should loose over rock', () => { });
  }));
});
