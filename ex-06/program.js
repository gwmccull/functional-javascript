module.exports = function (words) {
    return words.reduce(function (prev, curr, index, words) {
        if (prev.hasOwnProperty(curr)) {
            prev[curr]++;
        } else {
            prev[curr] = 1;
        }

        return prev;
    }, {});
}