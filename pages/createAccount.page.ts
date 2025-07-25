import { Page } from "./page.page";
import { $ } from "@wdio/globals";
import { UserData } from "../utils/user.generator";

export default class CreateAccountPage extends Page {
  private get firstNameInput() {
    return $("#firstname");
  }
  private get lastNameInput() {
    return $("#lastname");
  }
  private get emailInput() {
    return $("#email_address");
  }
  private get passwordInput() {
    return $("#password.input-text");
  }
  private get confirmPasswordInput() {
    return $("#password-confirmation");
  }
  private get createAnAccountBtn() {
    return $("button.action.submit");
  }

  get successMessage() {
    return $("div.message-success div");
  }
  get alreadyExistsMessage() {
    return $("div.message-error");
  }

  async open() {
    await super.open(
      "https://magento.softwaretestingboard.com/customer/account/create/"
    );
  }

  async createNewAccount(user: UserData): Promise<void> {
    await this.firstNameInput.setValue(user.firstName);
    await this.lastNameInput.setValue(user.lastName);
    await this.emailInput.setValue(user.email);
    await this.passwordInput.setValue(user.password);
    await this.confirmPasswordInput.setValue(user.confirmPassword);
    await this.createAnAccountBtn.click();
  }
}
