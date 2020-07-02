const pmaster = require("puppeteer"); 

(async () => {
    const browser = await pmaster.launch();
    const page = await browser.newPage(); 

    await page.goto('https://news.ycombinator.com/jobs', {waitUntil: 'load', timeout: 0});
    await page.screenshot({
        path: 'job-page-hNews.png',
        fullPage: true
    });
    browser.close(); 
})();

/*IIFE => execute a function as soon as they are created.
    the parentheses at the end tell the interpreter to execute the function
    the parentheses around the function makes the function, a functional expression
*/
