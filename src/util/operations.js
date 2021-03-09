module.exports = function (context) {
    function set(option, value) {
        context.options[option] = value;
    };

    function start() {
        context.program.init();
    }

    function end() {
        context.program.exit();
    }

    function goto(uri) {
        context.program.add({
            fn: 'goto',
            args: [ String(uri) ]
        });
    }

    function type(selector, text, delay = null) {
        const instruction = {
            fn: 'type',
            args: [ selector, String(text) ]
        };

        if (delay) {
            instruction.args.push({ delay: Number(delay) });
        }

        context.program.add(instruction)
    }

    function click(selector) {
        context.program.add({
            fn: 'click',
            args: [ selector ]
        });
    }

    function screenshot(output) {
        context.program.add({
            fn: 'screenshot',
            args: [ { path: String(output) } ]
        });
    }

    function wait(timeout) {
        const instruction = {};
        if (timeout === 'navigation') {
            instruction.fn = 'waitForNavigation';
            instruction.args = [];
        } else {
            instruction.fn = 'waitForTimeout';
            instruction.args = [ Number(timeout) || 0 ];
        }

        context.program.add(instruction);
    }

    return {
        set,
        start,
        goto,
        type,
        click,
        wait,
        screenshot,
        end
    }
}