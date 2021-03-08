module.exports = function (line) {
    const trimmed = line.trim();
    const operator = trimmed.replace(/\s.*$/, '');

    if (operator === trimmed) {
        return { operator, operands: [] };
    }

    const operands = trimmed
        .replace(operator + ' ', '')
        .split(/,(?=(?:(?:[^']*'){2})*[^']*$)/)
        .map(e => e.replace(/(^')|('$)/g, '').trim());

    return { operator, operands };
}