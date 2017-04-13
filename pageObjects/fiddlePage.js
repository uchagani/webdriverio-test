"use strict";

class FiddlePage {
    get links()  { return browser.waitForExist('a.some_class', 5000); }
    
    open() {
        browser.url('https://jsfiddle.net/cymo4xpj/');
    }
    
}
module.exports = new FiddlePage();