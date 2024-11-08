import { expect } from '@playwright/test';

export class BettyBlocksPage {
  constructor(page) {
    this.page = page;
    this.email_field = page.locator("//input[@name='loginId']");
    this.password_field = page.locator("//input[@type='password']");
    this.login_button = page.locator("//button[text()='Login']");
    this.create_button = page.locator("//span[text()='Create']");
    this.name_field = page.locator("//input[@name='name']");
    this.description_field = page.locator("//textarea[@name='description']");
    this.end_date_field = page.locator("//input[@autocomplete='on']");
    this.status_dropdown = page.locator("//div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl']");
    this.new_status = page.locator("//li[@data-value='New']");
    this.user_field = page.locator("//input[@name='user']");
    this.submit_button = page.locator("//button[@type='submit']");
    this.successMessage = page.getByText("(//div[@class='MuiAlert-message'])[1]");
  }

  async navigateToUrl(link) {
    await this.page.goto(link);
  }

  async enterEmail(emailAddress) {
    await this.email_field.fill(emailAddress);
  }

  async enterPasswordField(passwordField) {
    await this.password_field.fill(passwordField);
  }

  async clickLogin() {
    await this.login_button.click();
  }

  async clickCreate() {
    await this.create_button.click();
  }

  async enterName(name) {
    await this.name_field.fill(name);
  }

  async enterEndDate(end_date) {
    await this.end_date_field.fill(end_date);
  }

  async enterDescription(description) {
    await this.description_field.fill(description);
  }

  async selectStatus() {
    await this.status_dropdown.click();
    await this.new_status.click();
  }

  async enterUser(user) {
    await this.user_field.fill(user);
  }

  async clickSubmit() {
    await this.submit_button.click();
  }

  // async selectStatus() {
  //   await this.status_dropdown.selectOption({label:"New"})
  // }

  async successMessageVisible(success_message) {
    await this.successMessage.getByText(success_message);
  }
};
