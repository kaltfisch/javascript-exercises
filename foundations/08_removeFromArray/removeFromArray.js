const removeFromArray = function(arr, item, ...moreItems) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) { arr.splice(i, 1); i--; }
        for (const otherItem of moreItems) {
            if (arr[i] === otherItem) { arr.splice(i, 1); i--; }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
