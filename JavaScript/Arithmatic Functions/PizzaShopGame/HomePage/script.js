const customers = ["Priya", "Ravi", "Anjali", "Vikram", "Neha", "Arjun"];
const pizzas = ["Margherita", "Veggie Delight", "Farmhouse", "Paneer Tikka", "Pepperoni", "Cheese Burst"];

document.getElementById('startGameBtn').addEventListener('click', function () {
  document.getElementById('startGameBtn').style.display = 'none';
  document.getElementById('orderPanel').style.display = 'block';

  generateOrder();
});

function generateOrder() {
  const customer = customers[Math.floor(Math.random() * customers.length)];
  const pizza = pizzas[Math.floor(Math.random() * pizzas.length)];

  document.getElementById('customerName').textContent = `${customer} wants to order:`;
  document.getElementById('pizzaOrder').textContent = ` ${pizza}`;
}

document.getElementById('makePizzaBtn').addEventListener('click', function () {
  alert("Pizza is being made...  Stay tuned for Step 3!");
});

let stepsDone = {
  sauce: false,
  cheese: false,
  topping: false,
  baked: false
};

document.getElementById('makePizzaBtn').addEventListener('click', function () {
  document.getElementById('makePizzaPanel').style.display = 'block';
  document.getElementById('pizzaStatus').textContent = "Status: Let's start!";
});

function addSauce() {
  if (!stepsDone.sauce) {
    stepsDone.sauce = true;
    updateStatus("Sauce added!");
  } else {
    updateStatus("Sauce already added.");
  }
}

function addCheese() {
  if (!stepsDone.sauce) {
    updateStatus("Add sauce first!");
    return;
  }
  if (!stepsDone.cheese) {
    stepsDone.cheese = true;
    updateStatus("Cheese added!");
  } else {
    updateStatus("Cheese already added.");
  }
}

function addTopping() {
  if (!stepsDone.cheese) {
    updateStatus("Add cheese first!");
    return;
  }
  if (!stepsDone.topping) {
    stepsDone.topping = true;
    updateStatus("Topping added!");
  } else {
    updateStatus("Topping already added.");
  }
}

function bakePizza() {
  if (stepsDone.sauce && stepsDone.cheese && stepsDone.topping) {
    if (!stepsDone.baked) {
      stepsDone.baked = true;
      updateStatus("🎉 Pizza is baked! Ready for delivery.");
      setTimeout(startDelivery, 2000); // simulate a delay
    } else {
      updateStatus("Pizza already baked!");
    }
  } else {
    updateStatus("Complete all steps before baking!");
  }
}

function startDelivery() {
  document.getElementById('makePizzaPanel').style.display = 'none';
  document.getElementById('deliveryPanel').style.display = 'block';

  const messages = ["That was delicious!", "Perfect crust!", "Too cheesy... I love it!", "Yum! 5 stars!", "Could use more sauce next time!"];
  const tips = [50, 30, 70, 100, 20];

  const randomIndex = Math.floor(Math.random() * messages.length);
  const feedback = messages[randomIndex];
  const tip = tips[randomIndex];

  document.getElementById('deliveryMessage').textContent = "Delivered to customer!";
  document.getElementById('customerFeedback').textContent = `💬 "${feedback}" |  You earned ₹${tip}`;
}

function newOrder() {
  document.getElementById('deliveryPanel').style.display = 'none';
  document.getElementById('makePizzaPanel').style.display = 'none';

  // Reset state
  stepsDone = { sauce: false, cheese: false, topping: false, baked: false };
  document.getElementById('pizzaStatus').textContent = "Status: Waiting to start...";

  generateOrder(); // random new order
  document.getElementById('orderPanel').style.display = 'block';
  document.getElementById('makePizzaBtn').style.display = 'inline-block';
}


function updateStatus(msg) {
  document.getElementById('pizzaStatus').textContent = "Status: " + msg;
}
