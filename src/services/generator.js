module.exports = function(context) {

    function prefix(options) {
        return `const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch(${JSON.stringify(options)});
    const page = await browser.newPage();
`;
    }

    function suffix() {
        return '})();';
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
        return `    await page.${item.fn}(${item.args.map(parseArg).join(', ')});
`;
        function parseArg(arg) {
            let r;
            switch(typeof arg) {
                case 'string':
                    r = `'${arg}'`;
                    break;
                case 'object':
                    r = JSON.stringify(arg);
                    break;
                case 'number':
                default:
                    r = arg;
            }

            return r;
        }
    }

    return {
        generate
    };
}