import { expect, test } from "@playwright/test";

test.describe("General layout", () => {
    test("Should contain a link that skips to the main content", async ({ page }) => {
        await page.goto("/");

        const skipToMainContentLink = await page.getByRole("link", { name: "Skip to main content" });
        await skipToMainContentLink.focus();
        await skipToMainContentLink.click();

        await expect(page).toHaveURL("#main");
    });

    test("Should contain a link that open the github source in a new tab", async ({ page, context }) => {
        const pagePromise = context.waitForEvent("page");
        await page.goto("/");

        await page.click("text=GitHub");
        const gitHubPage = await pagePromise;
        await gitHubPage.waitForLoadState();

        expect(gitHubPage.url()).toEqual("https://github.com/Olaren15/a-meeting-planner");
    });
});
