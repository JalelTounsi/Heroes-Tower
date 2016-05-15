import { CasinoRoyalPage } from './app.po';

describe('casino-royal App', function() {
  let page: CasinoRoyalPage;

  beforeEach(() => {
    page = new CasinoRoyalPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('casino-royal works!');
  });
});
