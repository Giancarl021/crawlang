module.exports = function () {
    let initialized = false;
    const sequence = [];

    function init() {
        initialized = true;
    }

    function add(instruction) {
        if (!initialized) throw new Error('Program not initialized or already ended');
        sequence.push(instruction);
    }

    function exit() {
        initialized = false;
    }

    function getSequence() {
        return sequence;
    }

    return {
        init,
        add,
        exit,
        getSequence
    };
}