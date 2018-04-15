const puppeteer = require('puppeteer');

const SELECTOR_GOOGLE_SEARCH_INPUT = 'input';
const SELECTOR_GOOGLE_SEARCH_RESULT = '#rso > div > div > div:nth-child(1) > div > div > h3 > a';
const SELECTOR_AOE_OSS_LINK = '#page-header > div.header-menus > div:nth-child(1) > ul > li:nth-child(2) > a';

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        args: [
            '--window-position=0,0',
            '--window-size=1024,768'
        ]
    });

    const page = await browser.newPage();

    page.setViewport({
        width: 1024,
        height: 768
    });

    await page.goto('https://google.com');
    await page.type(SELECTOR_GOOGLE_SEARCH_INPUT, 'web companies in wiesbaden');
    await page.waitFor(5000);

    await page.type(SELECTOR_GOOGLE_SEARCH_INPUT, '\n');
    await page.waitFor(5000);

    await page.click(SELECTOR_GOOGLE_SEARCH_RESULT);

    await page.waitFor(5000);
    await page.click(SELECTOR_AOE_OSS_LINK);

    await page.waitFor(500000);

    await browser.close();
})();