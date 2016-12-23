import { SaleswayPage } from './app.po';

describe('salesway App', function() {
  let page: SaleswayPage;

  beforeEach(() => {
    page = new SaleswayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
