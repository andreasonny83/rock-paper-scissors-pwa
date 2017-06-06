import { RockPaperScissorsPwaPage } from './app.po';

describe('Rock Paper Scissors App', () => {
  let page: RockPaperScissorsPwaPage;

  beforeEach(() => {
    page = new RockPaperScissorsPwaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to Rock Paper Scissors!!'))
      .then(done, done.fail);
  });
});
