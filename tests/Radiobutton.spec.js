const{test, expect} = require ('@playwright/test')

test ("Radio Button", async ({page}) => {

    page.goto('https://testautomationpractice.blogspot.com/')
   
    //Radio Button
    //await page.locator('#male').check()
    await page.check('#male')
    await expect(await page.locator('#male')).toBeChecked()
    await expect(await page.locator('#male').isChecked()).toBeTruthy() //male

    //await page.locator('#female')
    await expect(await page.locator('#female').isChecked()).toBeFalsy() //false

   await page.waitForTimeout(5000) //pausiing code

})
   
    