function addTogether() {
    const args = [...arguments];
    if (args.length == 1) {
        if (!Number.isInteger(args[0])) {return undefined};
        return function (second) {
            if (!Number.isInteger(second)) {return undefined};
            return args[0] + second
        }
    }
    if (!Number.isInteger(args[0]) || !Number.isInteger(args[1])) {return undefined};
    return args[0] + args[1];
}

// addTogether(2,3);
// console.log(addTogether(5)(7));
// console.log(addTogether(2, "3"));
// addTogether(2)([3]);
console.log(addTogether("2", 3));