import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import { PageFactory } from "../pages/page-factory";
import { generateUniqueUser, getRegisteredUser } from "../utils/user.generator";
import CreateAccountPage from "../pages/createAccount.page";

let createAccountPage: CreateAccountPage;

Given('I am on the "Create New Customer Account" page', async () => {
  createAccountPage = PageFactory.createAccountPage();
  await createAccountPage.open();
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
