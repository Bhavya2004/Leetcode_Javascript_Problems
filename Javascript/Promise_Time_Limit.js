var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => { // create a new promise to return 

        // create a timer to reject the promise if the `t` time passes
        const timeout = setTimeout(() => {
            reject("Time Limit Exceeded");
        }, t);

        // start using the function as usual if it's succed before just return it
        fn(...args)
            .then(resolve)
            .catch(reject)
            // clear timer is needed to free memory from setTimeout - good practise
            .finally(() => clearTimeout(timeout));
        })
    }
};