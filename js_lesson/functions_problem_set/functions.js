function isEven(num) {
    return (num % 2 === 0);
}

function factorial(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
   }
   return result; 
}

// // brute force
// function kebabToSnake(str) {
//     var result = ""
//     for(var i = 0; i < str.length; i++) {
//         if (str[i] === "-") {
//             result += "_";
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }

function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}