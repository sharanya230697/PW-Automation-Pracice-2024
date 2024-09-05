import{ chromium, test } from "@playwright/test"

test.only("Login Test Demo", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    await page.click("text=Login");
   

    

});