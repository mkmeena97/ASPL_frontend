
let totalCoins = 0;
let lives = 3;
let level = 1;
let cakesBaked = 0;

const coinsDisplay = document.getElementById('coins');
const livesDisplay = document.getElementById('lives');
const levelDisplay = document.getElementById('level');


const character = document.getElementById('character');
const gameArea = document.getElementById('gameArea');

let posX = 50;
let posY = 50;
const speed = 10;

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function updateCharacterPosition() {
  const maxX = gameArea.clientWidth - character.clientWidth;
  const maxY = gameArea.clientHeight - character.clientHeight;

  posX = clamp(posX, 0, maxX);
  posY = clamp(posY, 0, maxY);

  character.style.left = posX + 'px';
  character.style.top = posY + 'px';
}

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowUp":
      posY -= speed;
      break;
    case "ArrowDown":
      posY += speed;
      break;
    case "ArrowLeft":
      posX -= speed;
      break;
    case "ArrowRight":
      posX += speed;
      break;
  }
  updateCharacterPosition();
});

updateCharacterPosition();

const cakeTypes = ["Chocolate", "Strawberry", "Vanilla", "Butterscotch", "Pineapple"];
const customerNames = ["Ravi", "Neha", "Aman", "Tina", "Kiran", "Sameer"];

function spawnCustomer() {
  const customerDiv = document.createElement('div');
  customerDiv.className = 'customer';

  // Random position inside gameArea
  const maxX = gameArea.clientWidth - 100;
  const maxY = gameArea.clientHeight - 100;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  customerDiv.style.left = randomX + "px";
  customerDiv.style.top = randomY + "px";

  // Random name and cake order
  const name = customerNames[Math.floor(Math.random() * customerNames.length)];
  const cake = cakeTypes[Math.floor(Math.random() * cakeTypes.length)];

  customerDiv.innerHTML = `
    <p class="order">🧾 ${name} wants: ${cake} Cake</p>
    <div class="icon">👤</div>
  `;

  gameArea.appendChild(customerDiv);
}

// Run it once when page loads
window.addEventListener('load', () => {
  spawnCustomer();
});

const ingredients = ["🥚", "🧂", "🌾", "🍒", "🍶"];
let collectedCount = 0;
const scoreDisplay = document.getElementById('score');
const progressBar = document.getElementById('progressBar');

let requiredIngredients = 5; // later can be per cake
let bakingStarted = false;

function spawnIngredient() {
  const ing = document.createElement('div');
  ing.className = 'ingredient';

  const ingredientType = ingredients[Math.floor(Math.random() * ingredients.length)];
//   const startX = Math.floor(Math.random() * (gameArea.clientWidth - 30));


  const areaWidth = gameArea.clientWidth;
  const minX = areaWidth * 0.25;
  const maxX = areaWidth * 0.75;
//   const minX = areaWidth * 0.4;
//   const maxX = areaWidth * 0.6;

  const startX = Math.floor(Math.random() * (maxX - minX) + minX);

  ing.textContent = ingredientType;
  ing.style.left = `${startX}px`;
  ing.style.top = `0px`;

  gameArea.appendChild(ing);

  let posY = 0;
  const fallSpeed = 2 + Math.random() * 2; // float speed between 2-4 px
  const phase = Math.random() * Math.PI * 2; // random phase offset
  const amplitude = 20 + Math.random() * 10; // how far it wiggles side-to-side

  const fall = setInterval(() => {
    posY += fallSpeed;
    // ing.style.top = `${posY}px`;
  const offsetX = Math.sin(posY / 20 + phase) * amplitude;
  ing.style.top = `${posY}px`;
  ing.style.left = `${startX + offsetX}px`;
  

    // Collision check with Rajeshwari
    const charRect = character.getBoundingClientRect();
    const ingRect = ing.getBoundingClientRect();

    if (
      ingRect.left < charRect.right &&
      ingRect.right > charRect.left &&
      ingRect.top < charRect.bottom &&
      ingRect.bottom > charRect.top
    ) {
      clearInterval(fall);
      ing.remove();
    //   collectedCount++;
    //   console.log("Collected:", ingredientType);
          collectedCount++;
      scoreDisplay.textContent = collectedCount;

      // Update progress
      const progressPercent = Math.min((collectedCount / requiredIngredients) * 100, 100);
      progressBar.style.width = progressPercent + "%";

      // Trigger baking when ready
      if (collectedCount >= requiredIngredients && !bakingStarted) {
        bakingStarted = true;
        startBaking();
      }

    }

    // // Remove if ingredient falls out of bounds
    // if (posY > gameArea.clientHeight) {
    //   clearInterval(fall);
    //   ing.remove();
    // }

    if (posY > gameArea.clientHeight) {
        clearInterval(fall);
        ing.remove();

        lives--;
        livesDisplay.textContent = lives;

        if (lives <= 0) {
            gameOver();
        }
    }

  }, 30);
}

// Spawn every 2 seconds
setInterval(spawnIngredient, 2000);

function startBaking() {
  console.log("🔥 Baking started...");

  let bakeProgress = 0;
  const bakeTimer = setInterval(() => {
    bakeProgress += 5;
    progressBar.style.width = `${Math.min(bakeProgress, 100)}%`;

    if (bakeProgress >= 100) {
      clearInterval(bakeTimer);
      progressBar.style.backgroundColor = "#ffd700";
      progressBar.textContent = "✅ Baked!";
      alert("🎂 Cake is ready to serve!");
      document.getElementById('deliverBtn').style.display = 'inline-block';

    }
  }, 300);
}

document.getElementById('deliverBtn').addEventListener('click', () => {
  document.getElementById('deliverBtn').style.display = 'none';

  const feedbacks = [
    "That was amazing!",
    "Delicious and on time!",
    "Pretty good, could be better!",
    "Too late... but tasty!",
    "Cold cake. Not cool!"
  ];

  const baseTip = Math.floor(Math.random() * 50) + 10; // ₹10 to ₹60
  const bonus = Math.pow(collectedCount, 1.1); // slight bonus for more effort
  const finalTip = Math.round(Math.min(baseTip + bonus, 100));

    totalCoins += finalTip;
    coinsDisplay.textContent = totalCoins;

  const reaction = feedbacks[Math.floor(Math.random() * feedbacks.length)];

  document.getElementById('feedbackPanel').style.display = 'block';
  document.getElementById('customerReaction').textContent = `💬 "${reaction}"`;
  document.getElementById('tipAmount').textContent = `💰 You earned: ₹${finalTip}`;
});

let idleTick = 0;

setInterval(() => {
  idleTick += 0.1;
  const bounce = Math.sin(idleTick) * 3;
  character.style.transform = `translateY(${bounce}px)`;
}, 50);


// function resetGame() {
//   collectedCount = 0;
//   bakingStarted = false;
//   scoreDisplay.textContent = "0";
//   progressBar.style.width = "0%";
//   progressBar.style.backgroundColor = "#4caf50";
//   progressBar.textContent = "";

//   document.getElementById('feedbackPanel').style.display = 'none';

//   // Remove existing ingredients
//   document.querySelectorAll('.ingredient').forEach(i => i.remove());

//   // New order (could be extended)
//   requiredIngredients = Math.floor(Math.random() * 3) + 4; // 4–6 ingredients
// }
function resetGame() {
  collectedCount = 0;
  bakingStarted = false;
  scoreDisplay.textContent = "0";
  progressBar.style.width = "0%";
  progressBar.style.backgroundColor = "#4caf50";
  progressBar.textContent = "";
  document.getElementById('feedbackPanel').style.display = 'none';

  // Remove old ingredients
  document.querySelectorAll('.ingredient').forEach(i => i.remove());

  cakesBaked++;

  // Level up every 3 cakes
  if (cakesBaked % 3 === 0) {
    level++;
    levelDisplay.textContent = level;
  }

  // Increase ingredient requirement slightly per level
  requiredIngredients = 4 + Math.floor(level * 1.5);
}

function gameOver() {
  alert("💀 Game Over! Final Coins: ₹" + totalCoins);
  location.reload(); // restart game
}
