module.exports = {
    start(operands) {
        return length(operands.length, 0);
    },

    end(operands) {
        return length(operands.length, 0);
    },

    set(operands) {
        return length(operands.length, 2);
    },

    goto(operands) {
        return length(operands.length, 1);
    },

    type(operands) {
        return length(operands.length, 2, 3);
    },

    click(operands) {
        return length(operands.length, 1);
    },

    wait(operands) {
        return length(operands.length, 1);
    },

    size(operands) {
        return length(operands.length, 2);
    },

    screenshot(operands) {
        return length(operands.length, 1);
    }
};

function length(got, min, max = min) {
    if (got >= min && got <= max) return null;

    if (min !== max) {
        return `Expected at minimum ${min} parameters and at maximum ${max} parameters, got ${got}`;
    } else {
        return `Expected ${min} parameters, got ${got}`;
    }

}

/*{
    wait,
    size,
    screenshot,
}*/