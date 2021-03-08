const fs = require('fs');
const createContext = require('./src/services/context');
const createGenerator = require('./src/services/generator');

async function main() {
    const context = createContext();
    const generator = createGenerator(context);

    const data = fs.readFileSync('sample.crawl', 'utf8');

    context.parse(data);

    const code = generator.generate();

    console.log(code);
}

main().catch(console.error);