const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.setViewport({
        width: 1440,
        height: 1030
    });

    await page.goto('https://aoe.com');
    await page.screenshot({path: 'aoe.png'});

    await browser.close();
})();