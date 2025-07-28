import { Before } from "@wdio/cucumber-framework";

Before(async () => {
  await browser.reloadSession();
});
