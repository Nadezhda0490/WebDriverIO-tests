import CreateAccountPage from "./createAccount.page";
import MyAccountPage from "./myAccount.page";

export class PageFactory {
  static createAccountPage(): CreateAccountPage {
    return new CreateAccountPage();
  }

  static myAccountPage(): MyAccountPage {
    return new MyAccountPage();
  }
}
