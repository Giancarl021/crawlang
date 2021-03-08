module.exports = function(context) {

    function prefix(options) {
        return `const puppeteer = require('puppeteer');\n(async ()=>{const browser=await browser.launch(${JSON.stringify(options)});const page = browser.newPage();`;
    }

    function suffix() {
        return '})()';
    }

    function generate() {
        const sequence = context.getProgramSequence();
        let str = prefix(context.options);

        for (const item of sequence) {
            str += parseItem(item); 
        }

        str += suffix();

        return str;
    }

    function parseItem(item) {
        return `;`;
    }

    return {
        generate
    };
}