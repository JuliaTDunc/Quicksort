function quicksort(arr) {
if(arr.length <= 1) return;
  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Pick the first value as the pivot
  
  let pivot = arr.shift()
  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      let leftArr = [];
      let rightArr = [];
      // every number larger (or equal) than the pivot is to the right
      console.log(pivot)
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] < pivot) {
        leftArr.push(arr[i])
      }
      if (arr[i] > pivot) {
        rightArr.push(arr[i])
      }
    }
    
  // Recursively sort the left
  // Recursively sort the right
    let left = quicksort(leftArr);
    let right = quicksort(rightArr);
  // Return the left, pivot and right in sorted order
  
    return [...left, pivot, ...right];
    
}



module.exports = [quicksort];
