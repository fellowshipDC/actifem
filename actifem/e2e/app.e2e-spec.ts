import { ActifemPage } from './app.po';

describe('actifem App', () => {
  let page: ActifemPage;

  beforeEach(() => {
    page = new ActifemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
