var chunk = function(arr, size) {
    var chunkedArray = []; // Resultant chunked array
    
    for (var i = 0; i < arr.length; i += size) {
      var chunk = arr.slice(i, i + size); // Extract a subarray of size 'size'
      chunkedArray.push(chunk); // Add the subarray to the chunked array
    }
    
    return chunkedArray;
  };