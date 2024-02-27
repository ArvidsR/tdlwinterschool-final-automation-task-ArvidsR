import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import addToCartPage from '../page-objects/addToCart.page.js';
import cartPage from '../page-objects/cart.page.js';
import checkoutPage from '../page-objects/checkout.page.js';
import { addedProductCount } from '../utils/utils.js';
import headerPage from '../page-objects/header.page.js';

When('I click on a product', async function() {
    const productNameElement = await productsPage.firstProductName;
    this.productNameText = await productNameElement.getText();
    await productNameElement.click();
    await expect(productPage.productName).toHaveText(this.productNameText);
});

When('I change the color', async function() {
    await browser.pause(1000);
    await productPage.productColor.click();
    await expect(productPage.initialProductColor.toString()).not.toBe(productPage.productColor.toString());
});


When('I click the Proceed to checkout button in add to cart page', async function() {
    await addToCartPage.proceedToCheckoutButton.click();
    await expect(cartPage.cartText).toHaveText("Your shopping cart contains: 1 product");
});

When('I click the Proceed to checkout button in cart page', async function() {
    await cartPage.proceedToCheckoutButton2.click();
    await expect(checkoutPage.step2).toHaveText("02. Sign in");
});

Then('A correct information is displayed, when I try to proceed to checkout', async function() {
    await expect(checkoutPage.createAnAccountElement).toHaveText("Please enter your email address to create an account.");
    await expect(checkoutPage.signInButton).toHaveText("Sign in");
});

When('I click the Cross button', async function() {
    await addToCartPage.crossButton.click();
});

When('I click the Add to cart button', async function() {
    this.initialItemCount = await addedProductCount(); // gets number of items from the cart (needed in scenario 3 and 4)
    await productPage.addToCartButton.click();
    await expect(addToCartPage.confirmationText).toHaveText("Product successfully added to your shopping cart");
});

Then('The number of items on the cart increases by 1', async function() {
    await browser.pause(2000);
    const newItemCount = await addedProductCount();
    await expect(newItemCount).toBe(this.initialItemCount + 1);
});

When('I click the Bin to remove the product', async function() {
    await cartPage.productRemove.click();
});

Then('The cart displays that it is empty', async function() {
    await expect(headerPage.cartText2).toHaveText("(empty)")
    await expect(cartPage.cartText3).toHaveText("Your shopping cart is empty.")
});