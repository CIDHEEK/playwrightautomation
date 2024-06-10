const {test, expect} = require ('@playwright/test')

test ("Soft aseertions" , async ({page}) =>{

await page.goto('https://demoblaze.com/')

/*Hard Assertions
await expect(page).toHaveTitle('STOE')
await expect(page).toHaveURL('https://demoblaze.com/')
await expect (page.locator('.navbar-brand')).toBeVisible()*/

//Soft Assertions
await expect.soft(page).toHaveTitle('STOE')
await expect.soft(page).toHaveURL('https://demoblaze.com/')
await expect.soft (page.locator('.navbar-brand')).toBeVisible()


})