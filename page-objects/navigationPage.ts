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
    this.formLayoutMenuItem = page.getByText("Form Layouts");
    this.datePickerMenuItem = page.getByText("Datepicker");
    this.smartTableMenuItem = page.getByText("Smart Table");
    this.toastrMenuItem = page.getByText("Toastr");
    this.toolTipMenuItem = page.getByText("Tooltip");
  }

  async formLayoutsPage() {
    await this.selectGroupMenuItem("Forms");
    await this.datePickerMenuItem.click({ force: true });
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
    const expandedState = await groupItem.getAttribute("aria-exapanded");

    if (expandedState == "false") {
      await groupItem.click();
    }
  }
}
