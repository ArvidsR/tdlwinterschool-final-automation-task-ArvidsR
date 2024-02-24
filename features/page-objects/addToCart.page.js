import { Page } from './page.js';
import { browser } from '@wdio/globals';

class AddToCartPage extends Page {
    get confirmationText() { return $('.layer_cart_product > h2'); }
    get proceedToCheckoutButton() { return $('[title="Proceed to checkout"]'); }
}

export default new AddToCartPage();