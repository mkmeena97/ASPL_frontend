/*
 use of Math.sin()
 - Ye smooth up-down value dega every 100ms – use it for:
    - Pulsating effects (CSS animations)
    - Breathing lights (gaming LEDs)
    - Background movement
    - Audio visualizers
*/

let t = 0;
setInterval(() => {
  const value = Math.sin(t);
  console.log(value);
  t += 0.1;
}, 100);
