module.exports = function reduce(arr, fn, initial) {
    return (function reducer(index, value) {
        if (index > arr.length - 1) return value;

        return reducer(index + 1, fn(value, arr[index], index, arr));
    })(0, initial);
};