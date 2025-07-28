import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import { PageName, PageFactory } from "../pages/page-factory";
import { generateUniqueUser, getRegisteredUser } from "../utils/user.generator";
import CreateAccountPage from "../pages/createAccount.page";
import { Page } from "../pages/page.page";

let currentPage: Page;
let createAccountPage: CreateAccountPage;

Given(/^I am on the "([^"]+)" page$/, async (pageTitle: string) => {
  const page = PageFactory.getPage(pageTitle as PageName);
  currentPage = page;
  await currentPage.open();

  if (pageTitle === PageName.customerAccount) {
    createAccountPage = page as CreateAccountPage;
  }
});

When("I fill the registration form with valid data", async () => {
  const newUser = generateUniqueUser();
  await createAccountPage.createNewAccount(newUser);
});

Then(
  /^I should see the account creation success message "([^"]+)"$/,
  async (expectedText: string) => {
    const isVisible = await createAccountPage.successMessage.isDisplayed();
    await expect(isVisible).toBe(true);

    const actualText = await createAccountPage.successMessage.getText();
    await expect(actualText).toBe(expectedText);
  }
);

When("I fill the registration form with an existing email", async () => {
  const user = getRegisteredUser();
  await createAccountPage.createNewAccount(user);
});

Then(
  /^I should see the error message "([^"]+)"$/,
  async (expectedText: string) => {
    const isVisible =
      await createAccountPage.alreadyExistsMessage.isDisplayed();
    await expect(isVisible).toBe(true);

    const actualText = await createAccountPage.alreadyExistsMessage.getText();
    await expect(actualText.trim()).toBe(expectedText);
  }
);
