module.exports = function (initialVariables = {}) {
    const vars = initialVariables;

    function assign(key, value) {
        vars[key] = value;
    }

    function retrieve(key) {
        return vars[key];
    }

    function deallocate(key) {
        delete vars[key];
    }

    return {
        assign,
        retrieve,
        deallocate
    }
}