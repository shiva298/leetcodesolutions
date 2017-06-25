/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    if(nums.length ===2){
        //console.log( [0,1]);
        return [0,1];
    }
        
    for(let idx1=0; idx1<nums.length; idx1++){
        
        let idx2 = nums.indexOf(target - nums[idx1]);
        
        console.log("comparing : ", nums[idx1] , ' && ', nums[idx2]);
        if(idx2 > -1 && idx1 !== idx2){
           // console.log(idx1, idx2);
            return [idx1, idx2]
        }
    }
};

console.log(twoSum([-1,-2,-3,-4,-5], -8));