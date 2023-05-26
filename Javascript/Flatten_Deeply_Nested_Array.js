/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && n > 0) {
        // Recursively flatten the subarray
        const flattenedSubarray = flat(arr[i], n - 1);
        result.push(...flattenedSubarray);
      } else {
        // Add the element directly to the result
        result.push(arr[i]);
      }
    }
  
    return result;
  };