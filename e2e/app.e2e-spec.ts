import { CliOrnekProjePage } from './app.po';

describe('cli-ornek-proje App', function() {
  let page: CliOrnekProjePage;

  beforeEach(() => {
    page = new CliOrnekProjePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
