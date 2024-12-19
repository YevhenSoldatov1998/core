import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000");
  // delete all items before starting the test
  await page.waitForSelector("text=Delete", { timeout: 2000 });
  const deleteButtons = await page.$$("text=Delete");
  for (const deleteButton of deleteButtons) {
    await deleteButton.click();
  }

  await page.getByPlaceholder("Name...").click();
  await page.getByPlaceholder("Name...").fill("Test name");
  await page.getByPlaceholder("Description...").click();
  await page.getByPlaceholder("Description...").fill("Description text");
  await page.getByRole("button", { name: "Add" }).click();
  await page.getByText("Test nameDescription textDelete").click();
  await page.getByRole("button", { name: "Delete" }).click();
});
