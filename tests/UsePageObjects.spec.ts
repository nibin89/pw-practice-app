import { test, expect } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage";
import { FormLayoutsPage } from "../page-objects/formLayoutPage";
import { DatepickerPage } from "../page-objects/datepickerPage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("navigate to form page", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.formLayoutsPage();
  await navigateTo.datePickerPage();
  await navigateTo.smartTablePage();
  await navigateTo.toastrPage();
  await navigateTo.tooltipPage();
});

test("parametrized methods", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const onFormsLayout = new FormLayoutsPage(page);
  const ondatepickerPage = new DatepickerPage(page);

  //await navigateTo.formLayoutsPage();
  await page.goto("http://localhost:4200/pages/forms/layouts");
  await onFormsLayout.submitUsingTheGridWithCreadentialsAndSelectOption(
    "Test@test.com",
    "Welcome1",
    "Option 2",
  );
  /**
   * This method fill out for user details
   * @param name - should be first and last name
   * @param email - valid email for the test user
   *@param rememberMe -checkbox
   */
  await onFormsLayout.submitInlineFormwithNameEmailAndCheckbox(
    "John Smith",
    "John@test.com",
    true,
  );

  await navigateTo.datePickerPage();
  await ondatepickerPage.selectCommonDatePickerFromToday(30);
  await ondatepickerPage.selectDatepickerWithRangeFromToday(6, 6);
});
