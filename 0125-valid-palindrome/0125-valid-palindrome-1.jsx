// String split, reverse

var isPalindrome = function (s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/g, "")

    let middle = Math.round(string.length / 2);
    let left = string.slice(0, middle);
    let right = string.slice(string.length - middle, string.length).split("").reverse().join("");

    return (left === right)
};