// applyCall.js
function introduce(lang) {
  console.log(`Hi, I am ${this.name}, and I code in ${lang}`);
}

const dev = { name: "Tez" };
introduce.call(dev, "JavaScript");
introduce.apply(dev, ["Java"]);
const boundIntroduce = introduce.bind(dev);
boundIntroduce("Python");   