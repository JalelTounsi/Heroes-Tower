export class CasinoRoyalPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('casino-royal-app h1')).getText();
  }
}
