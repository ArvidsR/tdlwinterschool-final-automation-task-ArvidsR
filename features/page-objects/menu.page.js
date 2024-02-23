import { Page } from './page.js';
import { browser } from '@wdio/globals';

class MenuPage extends Page {
    get womenButton() { return $('a.sf-with-ul[title="Women"]'); }
}

export default new MenuPage();