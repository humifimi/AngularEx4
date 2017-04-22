import { PostExPage } from './app.po';

describe('post-ex App', () => {
  let page: PostExPage;

  beforeEach(() => {
    page = new PostExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
