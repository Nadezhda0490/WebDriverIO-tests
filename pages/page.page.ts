import { browser } from "@wdio/globals";

export class Page {
  async open(url: string) {
    await browser.url(url);
  }

  async getWebSiteTitle() {
    await browser.getTitle();
  }
}
