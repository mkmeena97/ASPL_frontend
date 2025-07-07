class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(message) {
    this.observers.forEach(observer => observer(message));
  }
}

const output = document.getElementById("output");
const logger = msg => output.textContent += `🧾 Logger: ${msg}\n`;
const toaster = msg => output.textContent += `🔔 Toaster: ${msg}\n`;

const newsChannel = new Subject();
newsChannel.subscribe(logger);
newsChannel.subscribe(toaster);

function notifyAll() {
  output.textContent += "📣 Broadcasting message...\n";
  newsChannel.notify("New article published!");
}
