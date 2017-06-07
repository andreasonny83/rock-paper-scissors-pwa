import { browser, element, by, ElementFinder } from 'protractor';

export class RockPaperScissorsPwaPage {
  private timeout: number;

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  waitForElement(el: ElementFinder): any {
    const timeout: number = this.timeout;

    return browser.driver
      .wait(() => el.isPresent(), timeout)
      .then(() => {
         return browser.driver.wait(() => el.isDisplayed(), timeout);
      });
  }
}
