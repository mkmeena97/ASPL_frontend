var MyApp = MyApp || {}; // safety check

MyApp.Utils = MyApp.Utils || {};
MyApp.Utils.Math = {
  add: function(a, b) {
    return a + b;
  },
  multiply: function(a, b) {
    return a * b;
  }
};

console.log(MyApp.Utils.Math.add(2, 3)); // 5
