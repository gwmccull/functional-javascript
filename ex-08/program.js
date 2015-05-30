function duckCount() {
    return Array.prototype.reduce.call(arguments, function (prev, curr, index, arr) {
        return Object.prototype.hasOwnProperty.call(curr, 'quack') ? prev + 1 : prev;
    }, 0);
}

module.exports = duckCount;