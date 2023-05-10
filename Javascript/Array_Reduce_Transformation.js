/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length==0){
        return init;
    }
    let x=fn(init,nums[0]);
    let i =1;
    for(i=1;i<nums.length;i++){
        x=fn(x,nums[i]);
    }
    return x;
};