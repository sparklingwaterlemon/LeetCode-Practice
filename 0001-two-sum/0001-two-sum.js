/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let storage = {};
    
    for(let i=0 ; i < nums.length ; i++){
        let compliment = target - nums[i];
        
        if(storage[compliment] != null){
            return [storage[compliment], i]
        } else {
            storage[nums[i]] = i
        }
    }
};