const {test, expect} = require ('@playwright/test')

test ('Handle Checkbox', async ({page}) => {

await page.goto ('https://testautomationpractice.blogspot.com/')

// Single checkbox
/*await page.locator ("//input[@id='monday']").check()

await expect(await page.locator("//input[@id='monday']")).toBeChecked()
await expect(await page.locator("//input[@id='monday']").isChecked()).toBeTruthy()
await expect(await page.locator("//input[@id='saturday']").isChecked()).toBeFalsy()*/

// Multiple Checkboxes
const CheckboxLocator = [
                       " //input[@id='monday']",
                       "//input[@id='saturday']",
                       "//input[@id='sunday']"
                    ];
for (const locator of CheckboxLocator) // select multiple checkboxes
    {
        await page.locator(locator).check
    }

for (const locator of CheckboxLocator)
    {
        if (await page.locator(locator).isChecked())
        await page.locator(locator).uncheck()
    }
    
await page.waitForTimeout(5000)

})