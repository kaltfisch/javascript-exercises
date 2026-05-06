const palindromes = function (str) {
    let str_arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str.at(i) === "," || str.at(i) === "." || str.at(i) === "?" ||
            str.at(i) === "!" || str.at(i) === ";" || str.at(i) === ":" ||
            str.at(i) === "\'" || str.at(i) === "\"" || str.at(i) === " ") {
                continue;
            }
        str_arr.push(str.at(i).toLowerCase());
    }
    let reverse_str_arr = [];
    for (let i = str_arr.length - 1; i >= 0; i--) {
        reverse_str_arr.push(str_arr[i]);
    }

    for (let i = 0; i < str_arr.length; i++) {
        if (str_arr[i] != reverse_str_arr[i]) { return false; }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
