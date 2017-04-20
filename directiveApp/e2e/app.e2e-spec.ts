import { DirectiveAppPage } from './app.po';

describe('directive-app App', () => {
  let page: DirectiveAppPage;

  beforeEach(() => {
    page = new DirectiveAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
