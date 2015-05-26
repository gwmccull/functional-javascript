function doubleAll(numbers) {
    return numbers.map(function (curr, index, array) {
        return curr * 2;
    });
}

module.exports = doubleAll;