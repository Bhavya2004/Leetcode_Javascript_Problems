/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isCalled = false; // local variable to track the occurance
    
    return function(...args){
        if(!isCalled){ // Note: we are usign `!` here
            isCalled = true; // change the value in the first time.
            return fn(...args); // call the function with all the arguments using spread operator
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */