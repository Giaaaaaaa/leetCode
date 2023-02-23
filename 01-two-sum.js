const nums = [2, 7, 11, 15, 7, 2]
const target = 9

// for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j <nums.length; j++) {
//         let sum = nums[i] + nums[j]
//         if (sum === target) {
//         console.log([i,j]);
//         }
//     }
// }

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

// ---------------- https://www.youtube.com/watch?v=J0U1obg5BEM ---------------

// function twoSum(nums, target) {
//     const hashMap = {}
//     for (let i = 0; i < nums.length; i++) {
//         hashMap[nums[i]] = i
//     }
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i]
//         if (hashMap[complement] && hashMap[complement] !== i) {
//             console.log([i, hashMap[complement]]) 
//         }
//     }
// }


// function twoSum(nums, target) {
//     const hashMap = {}
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i]
//         if (complement in hashMap) {
//             return [i, hashMap[complement]]
//         }
//         hashMap[nums[i]] = i
//     }
// }


// ------------- https://www.youtube.com/watch?v=mK1_vjxMfh4 ---------------
function twoSume(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (map.has(complement)) {
            return [i ,map.get(complement)]
        }
        map.set(nums[i], i)
    }
}
twoSum(nums, target)
