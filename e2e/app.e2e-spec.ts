import { RockPaperScissorPwaPage } from './app.po';

describe('rock-paper-scissor-pwa App', () => {
  let page: RockPaperScissorPwaPage;

  beforeEach(() => {
    page = new RockPaperScissorPwaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
