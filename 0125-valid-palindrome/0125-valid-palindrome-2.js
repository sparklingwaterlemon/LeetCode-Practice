/** 
 * @param {string} s
 * @return {boolean}
*/

// TWO POINTERS

var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    start = 0;
    end = s.length - 1;

    for (let i = 0; start <= end; i++) {
        if (s[start] !== s[end]) {
            return false;
        } else {
            start++
            end--
        }
    };
    return true
};