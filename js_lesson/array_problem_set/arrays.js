// 1. Write a function printReverse() that takes an array as an argument
// and prints out the elements in the array in reverse order
// (don't actually reverse the array itself)
// function printReverse(someArray) {
//     for (var i=someArray.length - 1; i >= 0; i--) {
//         console.log(someArray[i]);
//     }
// }

function printReverse(someArray) {
    var cpArray = someArray.slice();
    cpArray.reverse().forEach(function(item) {
        console.log(item);
    });
}

// 2. Write a function isUniform() which takes an array as an argument
// and returns true if all elements in th earray are identical
function isUniform(someArr) {
    var standard = someArr[0];
    for (var i = 1; i < someArr.length; i++) {
        if (standard !== someArr[i]) {
            return false
        }
    } 
    return true;
}

// 3. Write a function sumArray() that accepts an array of numbers nd
// returns the sum of all the numbers in the array
// function sumArray(myArr) {
//     var sum = 0;
//     myArr.forEach(function(num) {
//         sum += num;
//     })
//     return sum;
// }

function sumArray(myArr) {
    summer = (x, y) => x + y;
    return myArr.reduce(summer);
}

// 4. Write a function max() that acepts an array of numbers and
// returns the maximum number in the array
function max(myArr) {
  var maximum = myArr[0];
  myArr.forEach(function(num) {
      if (num > maximum) {
          maximum = num;
      }
  })
  return maximum;
}