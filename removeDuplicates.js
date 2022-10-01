function removeDuplicates(array) {
  return array.filter((value, index) => {
    return array.indexOf(value) === index
  })
}

const mySet = new Set([1,1,2,3,4,3,5,6])

console.log(removeDuplicates([1,1,2,3,4,3,5,6]))
console.log(mySet)
console.log([...mySet])