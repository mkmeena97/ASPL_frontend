// 64.1: Fade in using requestAnimationFrame
document.getElementById("startFade").addEventListener("click", () => {
  const box = document.getElementById("fadeBox");
  let opacity = 0;

  function fade() {
    opacity += 0.01;
    box.style.opacity = opacity;
    if (opacity < 1) {
      requestAnimationFrame(fade);
    }
  }

  requestAnimationFrame(fade);
});

// 64.2: Compatibility polyfill
window.requestAnimFrame = window.requestAnimationFrame || 
                          window.webkitRequestAnimationFrame || 
                          window.mozRequestAnimationFrame || 
                          function(callback) {
                            window.setTimeout(callback, 1000 / 60);
                          };

// 64.3: Cancelling animation
let animationId = null;
document.getElementById("startMove").addEventListener("click", () => {
  const box = document.getElementById("moveBox");
  let pos = 0;

  function move() {
    if (pos >= 300) {
      cancelAnimationFrame(animationId);
      return;
    }
    pos += 2;
    box.style.left = pos + "px";
    animationId = requestAnimationFrame(move);
  }

  animationId = requestAnimationFrame(move);
});
