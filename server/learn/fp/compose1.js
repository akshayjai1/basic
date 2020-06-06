var newF1 = function (arg1) {
    return function (arg2) {
        return arg1 + arg2;
    }
} 

newF1(3)


multiply = function (arg1) {
    return function (arg2) {
        return arg2*arg1;
    }
}