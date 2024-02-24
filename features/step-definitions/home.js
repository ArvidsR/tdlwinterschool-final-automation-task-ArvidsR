import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import menuPage from '../page-objects/menu.page.js';
import productsPage from '../page-objects/products.page.js';

Given('I am on the home page', async function() {
    await homePage.open();
});

When('I click on the WOMEN', async function() {
    await menuPage.womenButton.click();
    await expect(productsPage.womenPageText).toHaveText("You will find here all woman fashion collections.");
});