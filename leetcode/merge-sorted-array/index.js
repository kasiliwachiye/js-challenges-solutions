function merge(nums1, m, nums2, n) {
  // Start filling nums1 from the end
  let lastIndexNums1 = m - 1; // Last index in nums1 (2)
  let lastIndexNums2 = n - 1; // Last index in nums2 (2)
  let newLastIndexNums1 = m + n - 1; // Last index in new nums1 (5)

  // While there are elements in nums2
  while (lastIndexNums2 >= 0) { // (2)
    // If nums1 is exhausted or nums2 element is larger
    if (lastIndexNums1 < 0 || nums2[lastIndexNums2] >= nums1[lastIndexNums1]) {
      nums1[newLastIndexNums1] = nums2[lastIndexNums2];
      lastIndexNums2--;
    } else {
      nums1[newLastIndexNums1] = nums1[lastIndexNums1];
      lastIndexNums1--;
    }
    newLastIndexNums1--;
  }
}

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]

nums1 = [1];
nums2 = [];
merge(nums1, 1, nums2, 0);
console.log(nums1); // Output: [1]

nums1 = [0];
nums2 = [1];
merge(nums1, 0, nums2, 1);
console.log(nums1); // Output: [1]
