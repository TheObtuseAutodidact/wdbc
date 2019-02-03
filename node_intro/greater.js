function average(scores) {
  var sumOfScores = sumArray(scores);
  return Math.round(sumOfScores / scores.length);
}

function sumArray(arr) {
  var sumTotal = 0;
  for (var i = 0; i < arr.length; i++) {
     sumTotal += arr[i];
    }
  return sumTotal;
}

var scores1 = [90, 98, 89, 100, 100, 86, 94];

var scores2 = [41, 65, 77, 82, 80, 54, 73, 63, 95, 49];

console.log(average(scores1)); // 94
console.log(average(scores2)); // 68
