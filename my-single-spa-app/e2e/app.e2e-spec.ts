import { MySingleSpaAppPage } from './app.po';

describe('my-single-spa-app App', function() {
  let page: MySingleSpaAppPage;

  beforeEach(() => {
    page = new MySingleSpaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sspa works!');
  });
});
