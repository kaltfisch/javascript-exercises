const fibonacci = function(num) {
    num = Number(num);

    if (num < 0) { return "OOPS"; }
    if (num == 0) { return 0; }
    let victim1 = 1;
    let victim2 = 1;
    let target = 1;
    for (let i = 2; i < num; i++) {
        target = victim1 + victim2;
        victim1 = victim2;
        victim2 = target;
    }
    return target;
};

// Do not edit below this line
module.exports = fibonacci;
