import { SmrFrontendPage } from './app.po';

describe('smr-frontend App', () => {
  let page: SmrFrontendPage;

  beforeEach(() => {
    page = new SmrFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
