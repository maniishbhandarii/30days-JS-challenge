const nums = [1,2, 3, 4, 5]

for(let i = 0; i<nums.length; i++){
    console.log(nums[i]);
}

nums.forEach((value, index) => {
    console.log(`Value at index ${index} is ${value}`)
})