const pmaster = require("puppeteer"); 
// const process = require("child_process");

(async () => {
    const browser = await pmaster.launch({
        headless: false
    });
    const page = await browser.newPage(); 

    await page.goto('https://www.youtube.com', {waitUntil: 'load', timeout: 0});
   
    await page.type('#search input','Replay iyaz', {delay: 50});

    await page.click('#search-icon-legacy');

    await delay(2000); 

    await page.click('.style-scope ytd-video-renderer'); 

    // this breaks when there are youtube ads, and I am struggling to find the css selector
    // that will automate skipping the ads.
    await delay(20000); 

    await browser.close(); 
})();

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms)); 
}