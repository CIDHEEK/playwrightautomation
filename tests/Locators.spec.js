//const {test, expect} = require('@playwright/test')

import {test, expect} from '@playwright/test'

test('Locators', async({page}) => {

   await page.goto('https://demoblaze.com/')

    //Property -Id
    // await page.locator('id=login2').click()
    await page.click('id=login2')


    //Provide UserName -CSS
    //await page.locator('#loginusername').fill('pavanol')
    await page.fill('#loginusername', 'pavanol')

    //provide password -CSS
    await page.fill('#loginpassword', 'test@123')

    //Login Button -Xpath

    await page.click("//button[normalize-space()='Log in']")

    //verify Logout link presence
    
   const logoutlink = await page.locator("//a[@id='logout2']")

    await expect (logoutlink).toBeVisible();

    await page.close()

})