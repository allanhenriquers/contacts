import { RetroToolPage } from './app.po';

describe('retro-tool App', () => {
  let page: RetroToolPage;

  beforeEach(() => {
    page = new RetroToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
