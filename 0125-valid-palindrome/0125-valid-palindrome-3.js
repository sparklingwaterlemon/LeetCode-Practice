/**
 * @param {string} s
 * @return {boolean}
 */

// TWO POINTERS PRETTY

const isPalindrome = (s) => {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        };
    };
    return true;
};