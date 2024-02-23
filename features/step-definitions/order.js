import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import addToCartPage from '../page-objects/addToCart.page.js';

When('I click on a product', async function() {
    const productNameElement = await productsPage.firstProductName;
    this.productNameText = await productNameElement.getText();
    await productNameElement.click();
    await expect(productPage.productName).toHaveText(this.productNameText);
});

When('I change the color', async function() {
    const productColorElement = await productPage.productColor;
    this.productColorText = await productColorElement.getText();
    await productColorElement.click();
});

When('I click the Add to cart button', async function() {
    await productPage.addToCartButton.click();
    await expect(addToCartPage.confirmationText).toHaveText("Product successfully added to your shopping cart");
});