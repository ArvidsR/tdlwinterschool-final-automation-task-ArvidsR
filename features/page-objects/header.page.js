import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HeaderPage extends Page {
    get searchInput() { return $('.search_query'); }
    get searchButton() { return $('.button-search'); }
    get productCounter() { return $('.col-sm-4 .ajax_cart_quantity'); }
    get cartText2() { return $('.ajax_cart_no_product')}
}

export default new HeaderPage();