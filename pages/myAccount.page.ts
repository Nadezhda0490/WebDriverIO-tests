import { Page } from "./page.page";
import { $ } from "@wdio/globals";
import { getRegisteredUser } from "../utils/user.generator";

export default class MyAccountPage extends Page {
  private get heading() {
    return $(".page-title");
  }
  private get myOrdersLink() {
    return $(
      '//div[@id="block-collapsible-nav"]//a[contains(text(),"My Orders")]'
    );
  }
  private get contactInformation() {
    return $(".box-information");
  }

  async isHeadingLoaded(): Promise<boolean> {
    return await this.heading.isDisplayed();
  }

  async getHeadingText(): Promise<string> {
    return await this.heading.getText();
  }

  async getContactInfo(): Promise<string> {
    return await this.contactInformation.getText();
  }

  async getMyOrdersLinkText(): Promise<string> {
    return await this.myOrdersLink.getText();
  }

  async isMyOrdersLinkVisible(): Promise<boolean> {
    return await this.myOrdersLink.isDisplayed();
  }

  async getMyOrdersLinkHref(): Promise<string> {
    return await this.myOrdersLink.getAttribute("href");
  }

  async loginAsRegisteredUser(): Promise<void> {
    const user = getRegisteredUser();
    await browser.url("/customer/account/login");
    await $("#email").setValue(user.email);
    await $("#pass").setValue(user.password);
    await $("#send2").click();
  }
}
