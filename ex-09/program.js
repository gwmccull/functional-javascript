var slice = Array.prototype.slice;

function logger(namespace) {
    // SOLUTION GOES HERE
    return function () {
        //var args = [namespace];
        //for (var ii = 0; ii < arguments.length; ii++) {
        //    args.push(arguments[ii]);
        //}
        //console.log.apply(null, args);

        console.log.apply(null, [namespace].concat(slice.call(arguments)));
    };
}

module.exports = logger;