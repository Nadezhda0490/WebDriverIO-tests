import CreateAccountPage from "./createAccount.page";
import MyAccountPage from "./myAccount.page";
import { Page } from "./page.page";

export enum PageName {
  customerAccount = "Create New Customer Account",
  myAccount = "My Account",
}

export class PageFactory {
  static getPage(page: PageName): Page {
    switch (page) {
      case PageName.customerAccount:
        return new CreateAccountPage();
      case PageName.myAccount:
        return new MyAccountPage();
      default:
        throw new Error(`Unknown page: ${page}`);
    }
  }
}
