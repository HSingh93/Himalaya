import { QrePage } from './app.po';

describe('qre App', () => {
  let page: QrePage;

  beforeEach(() => {
    page = new QrePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
