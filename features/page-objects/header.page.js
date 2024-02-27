import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HeaderPage extends Page {
    get searchInput() { return $('.search_query'); }
    get searchButton() { return $('.button-search'); }
}

export default new HeaderPage();