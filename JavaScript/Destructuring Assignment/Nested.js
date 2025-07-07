const student = {
  name: "Rajeshwari",
  marks: {
    math: 95,
    science: 90
  }
};

const {
  marks: { math, science }
} = student;

console.log(math);    // 95
console.log(science); // 90
