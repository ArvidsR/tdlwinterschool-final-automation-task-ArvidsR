import cartPage from '../page-objects/cart.page.js';

export async function addedProductCount() {
    const element = cartPage.productCounter;
    const itemCountText = await element.getText();
    const itemCount = parseInt(itemCountText.trim(), 10);
    return isNaN(itemCount) ? 0 : itemCount;
}