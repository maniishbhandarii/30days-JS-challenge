const nums = [81,2, 3, 4, 5]

nums.push(6)

console.log("Array after Push operation")
console.log(nums)

console.log("Array after POP operation")
nums.pop()
console.log(nums)

console.log(nums.shift() )// removes the first element of the array
console.log("Array after Shift operation")
console.log(nums)

console.log(nums.unshift(0,1) )// adds the first element of the array
console.log("Array after unShift operation")
console.log(nums)

let nums2 = nums.map((x,y)=>2*x) //returns a new array with new elements 

console.log("Array after Map operation: ")
console.log(nums2)

console.log("Array after Filter operation: ")
let nums3 = nums.filter((x) => x%2==0 //returns a new array with filtered condition
)
console.log(nums3)

let sumofarray = nums.reduce((prevValue, curValue, index) => {
    console.log(`The preValue is ${prevValue} and the curValue is ${curValue} and the index is ${index}`)
    return prevValue + curValue
})
console.log(sumofarray)