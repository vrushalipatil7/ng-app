import { FinishedPage } from './app.po';

describe('finished App', function() {
  let page: FinishedPage;

  beforeEach(() => {
    page = new FinishedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
