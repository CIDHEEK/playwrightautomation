const{test, expect} = require ('@playwright/test')

test ("Input Box", async ({page}) => {

    page.goto('https://testautomationpractice.blogspot.com/')
   
    //Input - firstname
    const firstNameBox = await page.locator('#name')
    await expect (firstNameBox).toBeVisible()
    await expect(firstNameBox).toBeEmpty()
    await expect(firstNameBox).toBeEditable()
    await expect(firstNameBox).toBeEnabled()
    
    firstNameBox.fill('John')

   await page.waitForTimeout(5000) //pausiing code

})
   
    