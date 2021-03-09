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
            args: [ uri ]
        });
    }

    function type(selector, text, delay = null) {
        const instruction = {
            fn: 'type',
            args: [ selector, text ]
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
            args: [ { path: output } ]
        });
    }

    return {
        set,
        start,
        goto,
        type,
        click,
        screenshot,
        end
    }
}