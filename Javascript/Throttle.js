/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let timerId = null; // Store the timer ID
    let lastArgs = null; // Store the latest function arguments
    let nextExecuteTime = 0; // Time to execute the function next
  
    return function(...args) {
      const currentTime = Date.now();
      if (currentTime >= nextExecuteTime) {
        // If current time has passed the next execution time, execute the function
        fn.apply(this, args);
        nextExecuteTime = currentTime + t;
      } else {
        // If the function is already throttled, store the latest arguments
        lastArgs = args;
      }
  
      // Schedule the execution of the stored arguments
      if (timerId === null) {
        timerId = setTimeout(() => {
          if (lastArgs !== null) {
            // If there are stored arguments, execute the function with them
            fn.apply(this, lastArgs);
            nextExecuteTime = Date.now() + t;
            lastArgs = null;
          }
          timerId = null; // Reset the timer ID
        }, nextExecuteTime - currentTime);
      }
    };
  };
  
  
  
  /**
   * const throttled = throttle(console.log, 100);
   * throttled("log"); // logged immediately.
   * throttled("log"); // logged at t=100ms.
   */