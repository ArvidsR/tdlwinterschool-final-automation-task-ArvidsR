import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {
    get productName() { return $('h1[itemprop="name"]'); }
    get productColor() { return $('li:not(.selected) a.color_pick'); }
    get addToCartButton() { return $('button.exclusive'); }
}

export default new ProductPage();