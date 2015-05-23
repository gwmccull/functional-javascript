function repeat(operation, num) {
    /*
    for (var ii = 0; ii < num; ii++) {
        operation();
    }
    */
    if (num <= 0) {
        return;
    }

    operation();

    return repeat(operation, --num);
}

module.exports = repeat;