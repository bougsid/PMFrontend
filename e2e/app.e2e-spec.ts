import { VisjsappPage } from './app.po';

describe('visjsapp App', () => {
  let page: VisjsappPage;

  beforeEach(() => {
    page = new VisjsappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
