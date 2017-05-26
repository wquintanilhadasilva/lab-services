import { LabServicesPage } from './app.po';

describe('lab-services App', () => {
  let page: LabServicesPage;

  beforeEach(() => {
    page = new LabServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
