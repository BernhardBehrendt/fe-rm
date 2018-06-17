const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http:/faz.net/aktuell');

    var cssb = [];
    cssb.push('<style>');
    cssb.push('h1 { font-size:30px;position:absolute;background-color:#f00; z-index:1000;color:#000; margin-left:30px;}');
    cssb.push('</style>');

    const css = cssb.join('');

    await page.pdf({
        path: 'example.pdf',
        format: 'A4',
        displayHeaderFooter: true,
        footerTemplate: css + '<h1>Page <span class="pageNumber"></span> of <span class="totalPages"></span></h1>',

    });
    await browser.close();
})();
