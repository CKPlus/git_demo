var assert = require('assert');
describe('webdriver.io page', function() {
   it('should have the right title - the fancy generator way', function () {
       browser.url('http://webdriver.io');
       var title = browser.getTitle();
       assert.equal(title, 'WebdriverIO - Selenium 2 javascript bindings for nodejs');
   });

   it('screenshot', function () {
       browser.saveScreenshot('./test/screenshot/snapshot1.png');
     });

    it('should have the right title - the fancy generator way', function () {
       browser.url('http://webdriver.io');
       var title = browser.getTitle();
       assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
   });
     it('screenshot', function () {
       browser.saveScreenshot('./test/screenshot/snapshot2.png');
     });

});