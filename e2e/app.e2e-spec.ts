import { browser, element, by, ElementFinder } from 'protractor';
import { RockPaperScissorsPwaPage } from './app.po';

describe('Rock Paper Scissors App', () => {
  let page: RockPaperScissorsPwaPage;

  beforeEach(() => {
    page = new RockPaperScissorsPwaPage();
    page.navigateTo();
  });

  it('should display welcome message', done => {
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to Rock Paper Scissors!!'))
      .then(done, done.fail);
  });

  it('should display a md-radio-group element', done => {
    element(by.css('.mat-radio-group')).isPresent()
      .then(isPresent => expect(isPresent).toBe(true))
      .then(done, done.fail);
  });

  it('start button should be disabled until the user chose a move', done => {
    element(by.css('.game_start')).getAttribute('disabled')
      .then(disabled => expect(disabled).toBe('true'))
      .then(done, done.fail);
  });

  it('on chosing a move the play button should become active', done => {
    element(by.css('#md-radio-1')).click();

    element(by.css('.game_start')).getAttribute('disabled')
      .then(disabled => expect(disabled).toBe(null))
      .then(done, done.fail);
  });

  it('on submitting a move, the app should display a dialog', done => {
    element(by.css('#md-radio-1')).click();
    element(by.css('.game_start')).click();

    element(by.css('.mat-dialog-container')).isPresent()
      .then(isPresent => expect(isPresent).toBe(true))
      .then(done, done.fail);
  });

  it('and it should contain the match result', done => {
    element(by.css('#md-radio-1')).click();
    element(by.css('.game_start')).click();

    element(by.css('.mat-dialog-container .mat-dialog-content')).getText()
      .then(text => expect(/^The opponent replied with/g.test(text)).toBe(true))
      .then(done, done.fail);
  });
});
