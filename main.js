  function mergeSort(arr) {
    // debugger 
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }
  console.log([3, 5, 8, 5, 99, 1])
  console.log(mergeSort([3, 5, 8, 5, 99, 1])) // [1, 3, 5, 5, 8, 99]


  function merge(left, right) {
    let sortedArr = [] 
    while (left.length != 0 && right.length != 0) {

        if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }

    return [...sortedArr, ...left, ...right]
  }

// function getReapetedNum(numArr){
//     let reapeatedNumArr = []
//     let perm = numArr[0]
//     for(i = perm+1; i<numArr.lenght; i++){
//         if(perm == i ){
//             reapeatedNumArr.push(i).shift()
//         } 
//         return reapeatedNumArr
        
//     }
// }
console.log(getReapetedNum([2,1,3,8,2,1,2]))

// function getReapetedNum(numArr){
//     let reapeatedNumArr = []
//     for(i = 0; i<numArr.lenght; i++){
//         for(j = i+1; j<numArr.lenght; j++){
//             if(numArr[i] == numArr[j]){
//                 reapeatedNumArr.push(numArr[i]).shift()
//             }
//         }
//     } 
//         return reapeatedNumArr
// }



function getReapetedNum(numArr){
    numArr.filter((item, index) => arr.indexOf(item) !== index)
    getReapetedNum(arry)
}
