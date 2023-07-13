import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Home page", () => {
    test("Should contain a link that navigates to the create page", async ({ page }) => {
        await page.goto("/");

        await page.click("text=Create an event");

        await expect(page).toHaveURL("/create");
    });

    test("Should not contain accessibility violations", async ({ page }) => {
        await page.goto("/");

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });
});
