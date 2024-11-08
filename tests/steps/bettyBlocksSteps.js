import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('User navigated to {string}', async ({ bettyBlocksPage }, link) => {
  await bettyBlocksPage.navigateToUrl(link);
});

When("Logins with valid email: {string}", async ({ bettyBlocksPage }, emailAddress) => {
  await bettyBlocksPage.enterEmail(emailAddress);
});

When("Valid password: {string}", async ({ bettyBlocksPage }, passwordField) => {
  await bettyBlocksPage.enterPasswordField(passwordField);
});

When("Clicks login button", async ({ bettyBlocksPage }) => {
  await bettyBlocksPage.clickLogin();
});

When("User clicks create button", async ({ bettyBlocksPage }) => {
  await bettyBlocksPage.clickCreate();
});

When("User fills in name field with: {string}", async ({ bettyBlocksPage }, name) => {
  await bettyBlocksPage.enterName(name);
});

When("User fills in description field with: {string}", async ({ bettyBlocksPage }, description) => {
  await bettyBlocksPage.enterDescription(description);
});

When("User chooses from {string} form", async ({ bettyBlocksPage }, end_date) => {
  await bettyBlocksPage.enterEndDate(end_date);
});

When('User chooses New status', async ({bettyBlocksPage}) => {
  await bettyBlocksPage.selectStatus();
});

When("User fills in {string} field with valid input", async ({ bettyBlocksPage }, user) => {
  await bettyBlocksPage.enterUser(user);
});

When('User clicks submit button', async ({bettyBlocksPage}) => {
  await bettyBlocksPage.clickSubmit();
});

When('User verifies that a message: {string} is displayed', async ({bettyBlocksPage, page}, success_message) => {
  await page.waitForTimeout(2000);
  await bettyBlocksPage.successMessageVisible(success_message)
});

