const {test, expect} = require ('@playwright/test')

test ('AssertionsTest' , async ({page}) => { 

//open app url
await page.goto ('https://demo.nopcommerce.com/register')

//1) expect(page).toHaveURL()	    Page has a URL
await expect (page).toHaveURL('https://demo.nopcommerce.com/register')

//2) expect(page).toHaveTitle()	     Page has a title
await expect(page).toHaveTitle('nopCommerce demo store. Register')

//3) expect(locator).toBeVisible()	Element is visible
const logoElement = await page.locator('.header-logo')
await expect(logoElement).toBeVisible()

//4)  expect(locator).toBeEnabled()	Element is enabled
const searchStoreBox = await page.locator('#small-searchterms')
await expect(searchStoreBox).toBeEnabled()

//5)  expect(locator).toBeChecked()	Checkbox is checked
//radio Button
const maleRadioButton = await page.locator('#gender-male')
await maleRadioButton.click()
await expect(maleRadioButton).toBeChecked()	

//checkBox
const newsLetterCheckBox = await page.locator('#Newsletter')
await expect(newsLetterCheckBox).toBeChecked

//6)  expect(locator).toHaveAttribute()	Element has a DOM attribute
const regButton = await page.locator('#register-button')
await expect(regButton).toHaveAttribute('type', 'submit')

//7) expect(locator).toHaveText()   Element matches text
const pageTitleText = await page.locator('.page-title  h1')
await expect(pageTitleText).toHaveText('Register')

//8) expect(locator).toContainText()   Element contains text
await expect(pageTitleText).toContainText('Reg')

//9) expect (locator).toHaveValue(value)    Input has a value
const emailInput = await page.locator('#Email')
await emailInput.fill('test@demo.com')
await expect(emailInput).toHaveValue('test@demo.com')

//10) expect(locator).toHaveCount()	    List has exact number of children
const options = await page.locator("select[name='DateOfBirthMonth'] option")
await expect(options).toHaveCount(13)	
})