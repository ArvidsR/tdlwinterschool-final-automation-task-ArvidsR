import headerPage from '../page-objects/header.page.js';

export async function addedProductCount() {
    const element = headerPage.productCounter;
    const itemCountText = await element.getText();
    const itemCount = parseInt(itemCountText.trim(), 10);
    return isNaN(itemCount) ? 0 : itemCount;
}