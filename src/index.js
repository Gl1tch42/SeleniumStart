const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
// "start": "nodemon src/index"

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

(async function exemplo() {
    let driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('https://www.google.com/');
})();




