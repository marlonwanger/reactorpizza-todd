import { ReactivePizzaPage } from './app.po';

describe('reactive-pizza App', () => {
  let page: ReactivePizzaPage;

  beforeEach(() => {
    page = new ReactivePizzaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
