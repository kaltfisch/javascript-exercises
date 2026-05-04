const reverseString = function(str) {
    let reverseStr = "";
    for (let i = 1; i <= str.length; i++) {
        reverseStr += str.at(-i);
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
