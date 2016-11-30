import { DukeWebPage } from './app.po';

describe('duke-web App', function() {
  let page: DukeWebPage;

  beforeEach(() => {
    page = new DukeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
