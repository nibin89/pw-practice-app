import { Page } from "@playwright/test";

export class FormLayoutsPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async submitUsingTheGridWithCreadentialsAndSelectOption(
    email: string,
    password: string,
    optiontext: string,
  ) {
    const UsingGridForm = this.page.locator("nb-card", {
      hasText: "Using the Grid",
    });
    await UsingGridForm.getByRole("textbox", { name: "Email" }).fill(email);
    await UsingGridForm.getByRole("textbox", { name: "Password" }).fill(
      password,
    );
    await UsingGridForm.getByRole("radio", { name: optiontext }).check({
      force: true,
    });
    await UsingGridForm.getByRole("button").click();
  }

  async submitInlineFormwithNameEmailAndCheckbox(
    name: string,
    email: string,
    rememberMe: boolean,
  ) {
    const InlineForm = this.page.locator("nb-card", {
      hasText: "Inline form",
    });
    await InlineForm.getByRole("textbox", { name: "Jane Doe" }).fill(name);
    await InlineForm.getByRole("textbox", { name: "Email" }).fill(email);
    if (rememberMe)
      await InlineForm.getByRole("checkbox").check({ force: true });
    await InlineForm.getByRole("button").click();
  }
}
