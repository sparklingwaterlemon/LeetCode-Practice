// as a refresher, came up with previous two solutions again as practice
// took out regular expressions component - am currently practicing


let str1 = "racecar";

var isPalindrome10 = function(s){
    var leftstring = s;
    var reversed = s.split("").reverse().join("");
    
    return leftstring === reversed;
}
// console.log(isPalindrome10(str1));


let str2 = "race1car";

function isPalindrome11(s){
    var left = 0;
    var right = s.length - 1;

    while(left < right){
        if(s[left] !== s[right]){
            return false
        } else {
            left++;
            right--;
        };
    };
    return true;
};
console.log(isPalindrome11(str2));



// Currently working on practicing regex
// also learned about string.prototype.trim();

// https://regexone.com/lesson/whitespaces?
// https://regexcrossword.com/
// https://regexcrossword.com/howtoplay
// https://regexr.com/
