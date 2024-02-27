import { Page } from './page.js';
import { browser } from '@wdio/globals';

class CartPage extends Page {
    get cartText() { return $('.heading-counter'); }
    get proceedToCheckoutButton2() { return $('.cart_navigation [title="Proceed to checkout"]'); }
    get productCounter() { return $('.col-sm-4 .ajax_cart_quantity'); }
}

export default new CartPage();