const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');


By = webdriver.By;
// until = webdriver.until

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

(async function exemplo() {

    let driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('https://www.transfermarkt.com.br/flamengo-rio-de-janeiro/startseite/verein/614');

    driver.findElement(By.css('.dataMarktwert')).then((e) => {

        console.log('sucess');

        e.getText().then(function (text) {

            console.log("valor de mercado do flamengo: " + text);

         });
    });

})();




