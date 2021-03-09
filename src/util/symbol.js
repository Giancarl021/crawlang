module.exports = function (line) {
    const trimmed = line.trim();
    const operator = trimmed.replace(/\s.*$/, '');

    if (trimmed.startsWith('#')) {
        return { operator: 'comment', operands: [] };
    }

    if (operator === trimmed) {
        return { operator, operands: [] };
    }

    const operands = trimmed
        .replace(operator + ' ', '')
        .split(/,(?=(?:(?:[^']*'){2})*[^']*$)/)
        .map(e => e.trim().replace(/(^')|('$)/g, ''))
        .map(e => e === 'true' ? true : (e === 'false' ? false : e))
        .map(e => e === 'null' ? null : (e === 'undefined' ? undefined : e));

    return { operator, operands };
}