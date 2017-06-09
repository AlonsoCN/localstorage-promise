import { LocalstoragePromisePage } from './app.po';

describe('localstorage-promise App', () => {
  let page: LocalstoragePromisePage;

  beforeEach(() => {
    page = new LocalstoragePromisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
