import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(process.env.PLAYWRIGHT_ENV_BASE_URL as string);
  await page.getByPlaceholder("Name...").click();
  await page.getByPlaceholder("Name...").fill("1");
  await page.getByPlaceholder("Description...").click();
  await page.getByPlaceholder("Description...").fill("2");
  await page.getByRole("button", { name: "Add" }).click();
  await page.getByText("12").click();
  await page
    .locator("div")
    .filter({ hasText: /^12Delete$/ })
    .getByRole("button")
    .click();
});
