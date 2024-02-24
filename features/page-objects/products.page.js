import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductsPage extends Page {
    get womenPageText() { return $('.rte strong'); }
    get firstProductName() { return $('h5[itemprop="name"]'); }
}

export default new ProductsPage();