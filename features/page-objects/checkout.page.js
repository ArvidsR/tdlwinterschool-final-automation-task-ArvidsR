import { Page } from './page.js';
import { browser } from '@wdio/globals';

class CheckoutPage extends Page {
    get step2() { return $('.step_current'); }
    get createAnAccountElement() { return $('#create-account_form .form_content p'); }
    get signInButton() { return $('#SubmitLogin span'); }
}

export default new CheckoutPage();