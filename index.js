function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return func = a => a * 2;
}

function returnsAnAnonymousFunction() {
    return x => x ** 2;
}