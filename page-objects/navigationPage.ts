import { Locator, Page } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;
  readonly formLayoutMenuItem: Locator;
  readonly datePickerMenuItem: Locator;
  readonly smartTableMenuItem: Locator;
  readonly toastrMenuItem: Locator;
  readonly toolTipMenuItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formLayoutMenuItem = page.getByRole("link", { name: "Form Layouts" });
    this.datePickerMenuItem = page.getByRole("link", { name: "Datepicker" });
    this.smartTableMenuItem = page.getByRole("link", { name: "Smart Table" });
    this.toastrMenuItem = page.getByRole("link", { name: "Toastr" });
    this.toolTipMenuItem = page.getByRole("link", { name: "Tooltip" });
  }

  async formLayoutsPage() {
    await this.selectGroupMenuItem("Forms");
    await this.formLayoutMenuItem.click({ force: true });
  }

  async datePickerPage() {
    await this.selectGroupMenuItem("Forms");
    await this.datePickerMenuItem.click({ force: true });
  }

  async smartTablePage() {
    await this.selectGroupMenuItem("Tables & Data");
    await this.smartTableMenuItem.click({ force: true });
  }

  async toastrPage() {
    await this.selectGroupMenuItem("Modal & Overlays");
    await this.toastrMenuItem.click({ force: true });
  }
  async tooltipPage() {
    await this.selectGroupMenuItem("Modal & Overlays");
    await this.toolTipMenuItem.click({ force: true });
  }

  private async selectGroupMenuItem(groupItemtiltle: string) {
    const groupItem = this.page.getByTitle(groupItemtiltle);
    const expandedState = await groupItem.getAttribute("aria-expanded");

    if (expandedState == "false") {
      await groupItem.click();
    }
  }
}
