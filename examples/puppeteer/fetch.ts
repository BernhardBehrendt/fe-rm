const puppeteer = require('puppeteer');

const SELECTOR_GOOGLE_SEARCH_INPUT = 'input';

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

    let data = await page.evaluate(() => {
        let data = {results: []};

        document.body
            .querySelectorAll('h3.r')
            .forEach((resultItem) => {
                data.results.push(resultItem.textContent);
            });

        return data

    }, {});


    console.log(data);

    await page.waitFor(500000);

    await browser.close();
})();