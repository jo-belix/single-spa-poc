import { browser, element, by } from 'protractor';

export class MySingleSpaAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sspa-root h1')).getText();
  }
}
