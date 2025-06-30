/*
    - Static methods belong to the class, not the instance.
*/

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(10, 5)); // 15
