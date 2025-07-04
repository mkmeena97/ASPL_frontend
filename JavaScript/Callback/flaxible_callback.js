function foo(arr, callback) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]); // dynamic logic
    sum += arr[i];
  }
  return sum;
}

foo([1, 2, 3], alert); // popups 1, 2, 3

foo([1, 2, 3], function(x) {
  console.log('Number is:', x); // prints to console
});
