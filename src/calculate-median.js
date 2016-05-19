function calculate_median(arr) {
  var begin = buildBeginIndex(arr);/*得到数组第一个偶数的位置*/
  var last = buildLastIndex(arr);/*得到数组最后一个偶数的位置*/

  return arr[(begin + last) / 2];
}

function buildBeginIndex(array) {/*数组第一个偶数的位置*/
  for (var i = 0; i < array.length; i++) {
    if (isEven(array[i])) {
      return i;
    }
  }
}

function buildLastIndex(array) {/*数组最后一个偶数的位置*/
  for (var j = array.length - 1; j > -1; j--) {
    if (isEven(array[j])) {
      return j;
    }
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
}

module.exports = calculate_median;
