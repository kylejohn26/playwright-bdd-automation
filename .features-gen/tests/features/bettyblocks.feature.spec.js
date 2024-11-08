/** Generated from: tests\features\bettyblocks.feature */
import { test } from "../../../tests/fixtures/fixture.js";

test.describe("Create New Project", () => {

  test.describe("Verify that user can create a new project successfully", () => {

    test("Example #1", { tag: ["@test"] }, async ({ Given, bettyBlocksPage, And, page }) => {
      await Given("User navigated to \"https://kyle-john-collo.betty.app/home-page\"", null, { bettyBlocksPage });
      await And("Logins with valid email: \"jajakrx26@gmail.com\"", null, { bettyBlocksPage });
      await And("Valid password: \"QNvX4pWA6qTtLU!\"", null, { bettyBlocksPage });
      await And("Clicks login button", null, { bettyBlocksPage });
      await Given("User navigated to \"https://kyle-john-collo.betty.app/home-page\"", null, { bettyBlocksPage });
      await And("Logins with valid email: \"jajakrx26@gmail.com\"", null, { bettyBlocksPage });
      await And("Valid password: \"QNvX4pWA6qTtLU!\"", null, { bettyBlocksPage });
      await And("Clicks login button", null, { bettyBlocksPage });
      await And("User clicks create button", null, { bettyBlocksPage });
      await And("User fills in name field with: \"Test1\"", null, { bettyBlocksPage });
      await And("User fills in description field with: \"Test Only\"", null, { bettyBlocksPage });
      await And("User chooses from \"05/11/2024\" form", null, { bettyBlocksPage });
      await And("User fills in \"Kyle\" field with valid input", null, { bettyBlocksPage });
      await And("User clicks submit button", null, { bettyBlocksPage });
      await And("User verifies that a message: \"Form has been submitted successfully.\" is displayed", null, { bettyBlocksPage, page });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\bettyblocks.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify that user can create a new project successfully|Example #1": {"pickleLocation":"26:3","tags":["@test"]},
};