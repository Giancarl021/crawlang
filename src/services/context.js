const createVariables = require('../util/var');
const symbol = require('../util/symbol');
const createProgram = require('./program');
const createOperations = require('../util/operations');
const rules = require('../util/rules');

module.exports = function () {
    const vars = createVariables();
    const options = {};
    const program = createProgram();

    function parse(string) {
        const operations = createOperations(this);

        const instructions = string.split(/\r?\n/);
        
        for (let i = 0; i < instructions.length; i++) {
            const instruction = instructions[i];

            if (!instruction) continue;

            const data = symbol(instruction);
            
            if (data.operator === 'comment') continue;

            const op = operations[data.operator];
            
            if (!op) {
                throw new Error('Undefined function at line ' + (i + 1));
            }

            console.log(rules, data.operator);

            const error = rules[data.operator](data.operands);

            if (error) {
                throw new Error(error + ' at function ' + data.operator + ' at line ' + (i + 1));
            }

            operations[data.operator](...data.operands);
        }
    }

    function getProgramSequence() {
        return program.getSequence();
    }

    return {
        vars,
        options,
        program,
        parse,
        getProgramSequence
    };
}