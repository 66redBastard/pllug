const nums = [3, 1, 420, 3];
const target = 6;
const twoSum = (nums, target) => {
  //   time complexity - O(n) ----- n = number of iterarion
  //   space complexity - O(n) ---- n = number of arr or obj
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let compairedItems = target - value;
    // check if map includes compaired value by key
    if (map.get(compairedItems) !== undefined) {
      console.log([map.get(compairedItems), i]);
      return [map.get(compairedItems), i];
    } else {
      map.set(value, i);
    }
  }
};
twoSum(nums, target);

const twoSumBrutForce = (nums, target) => {
  //   time complexity - O(n^2)
  //   space complexity - O(1)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log([i, j]);
        return [i, j];
      }
    }
  }
};
twoSumBrutForce(nums, target);
