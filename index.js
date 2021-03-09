const fs = require('fs');
const args = require('yargs').argv;
const createContext = require('./src/services/context');
const createGenerator = require('./src/services/generator');
const locate = require('./src/util/locate');

async function main() {
    let input = args._[0];
    let output = args.output || args.o || null;
    const exec = Boolean(args.exec || args.e);

    if (!input) {
        throw new Error('Invalid input file');
    }

    input = locate(input, true);
    if(output) output = locate(output, true);

    const context = createContext();
    const generator = createGenerator(context);

    const data = fs.readFileSync(input, 'utf8');

    context.parse(data);

    const code = generator.generate();

    if (exec) {
        eval(code);
    } else if (output) {
        fs.writeFileSync(output, code);
    } else {
        console.log(code);
    }

}

main().catch(console.error);