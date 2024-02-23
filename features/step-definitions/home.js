import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import menuPage from '../page-objects/menu.page.js';

Given('I am on the home page', async function() {
    await homePage.open();
});

When('I click on the WOMEN', async function() {
    await menuPage.womenButton.click();
});