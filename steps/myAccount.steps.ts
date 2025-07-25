import { Given, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import { PageFactory } from "../pages/page-factory";
import { getRegisteredUser } from "../utils/user.generator";
import MyAccountPage from "../pages/myAccount.page";

let myAccountPage: MyAccountPage;

Given("I am logged in as a registered user", async () => {
  myAccountPage = PageFactory.myAccountPage();
  await myAccountPage.loginAsRegisteredUser();
});

Then("the heading should be visible", async () => {
  const isVisible = await myAccountPage.isHeadingLoaded();
  await expect(isVisible).toBe(true);
});

Then(/^the heading text should be "([^"]+)"$/, async (expectedText: string) => {
  const actualText = await myAccountPage.getHeadingText();
  await expect(actualText.trim()).toBe(expectedText);
});

Then(
  "the contact information should display the correct user data",
  async () => {
    const user = getRegisteredUser();
    const contactInfo = await myAccountPage.getContactInfo();

    await expect(contactInfo).toContain(user.firstName);
    await expect(contactInfo).toContain(user.lastName);
    await expect(contactInfo).toContain(user.email);
  }
);

Then("the My Orders link should be visible", async () => {
  const isVisible = await myAccountPage.isMyOrdersLinkVisible();
  await expect(isVisible).toBe(true);
});

Then(
  /^the My Orders link text should be "([^"]+)"$/,
  async (expectedText: string) => {
    const actualText = await myAccountPage.getMyOrdersLinkText();
    await expect(actualText.trim()).toBe(expectedText);
  }
);

Then(
  /^the My Orders link should navigate to "([^"]+)"$/,
  async (expectedHref: string) => {
    const actualHref = await myAccountPage.getMyOrdersLinkHref();
    await expect(actualHref).toContain(expectedHref);
  }
);
