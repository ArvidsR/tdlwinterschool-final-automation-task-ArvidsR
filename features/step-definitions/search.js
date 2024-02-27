import { Given, When, Then } from '@wdio/cucumber-framework';
import headerPage from '../page-objects/header.page.js';
import productsPage from '../page-objects/products.page.js';

When('I enter {string} into Search input field', async function(text) {
    await headerPage.searchInput.setValue(text);
});

When('I click the Search button', async function() {
    await headerPage.searchButton.click();
});

Then('The correct information is displayed in the products page with the corresponding {string}', async function(text) {
    await browser.pause(1000);
    await expect(productsPage.productsNames).toHaveText(text);
});