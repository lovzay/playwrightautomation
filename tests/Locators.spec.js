import { test, expect } from '@playwright/test';

test('Locators', async ({page})=>{
        
        await page.goto('https://www.demoblaze.com/index.html')
    
        // await page.locator('id=login2').click();
        await page.click('id=login2');

        // provide username - css
        await page.locator('#loginusername').fill('lovzay');
        // await page.fill('#loginusername', 'testuser');
        //await page.type('#loginusername', 'lovzay')

        // provide password - css
        await page.fill("input[id='loginpassword']", 'foobarbaz')

        // click login button - css
        await page.click("//button[normalize-space()='Log in']")

        //verify logout link presence
        await page.locator("(//a[normalize-space()='Log out'])[1]")

        await expect(logoutlink).toBeVisible()

        await page.close()
});