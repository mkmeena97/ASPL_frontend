/*
Difference Between Uniform vs Gaussian
 - Math.random() → Uniform distribution (sabko equal chance)
 - Gaussian → Bell curve jisme mean ke aas-paas zyada values
*/

//Generate Gaussian with Box-Muller Transform
function gaussianRandom(mean = 0, stdDev = 1) {
  let u = 0, v = 0;
  while(u === 0) u = Math.random(); // avoid 0
  while(v === 0) v = Math.random();
  let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return z * stdDev + mean;
}

// Generate 10 random values with mean 50 and std deviation 10
for(let i = 0; i < 10; i++) {
  console.log(gaussianRandom(50, 10));
}

//Real-Life Example
//Shooting Inaccuracy
const playerX = 10;
let actualHitX = playerX + gaussianRandom(0, 2); // simulate spread

//Sensor Data Noise
let temperature = 25 + gaussianRandom(0, 0.5); // fluctuating sensor reading
