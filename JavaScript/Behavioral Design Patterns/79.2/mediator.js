class Chatroom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }

  send(message, from, to) {
    const log = document.getElementById("chat");
    if (to) {
      log.textContent += `📩 ${from.name} ➡️ ${to.name}: ${message}\n`;
    } else {
      Object.values(this.users).forEach(user => {
        if (user !== from) {
          log.textContent += `📢 ${from.name} ➡️ Everyone: ${message}\n`;
        }
      });
    }
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(msg, toUser) {
    this.chatroom.send(msg, this, toUser);
  }
}

function startChat() {
  const chatroom = new Chatroom();

  const raj = new User("Raj");
  const ali = new User("Ali");
  const maria = new User("Maria");

  chatroom.register(raj);
  chatroom.register(ali);
  chatroom.register(maria);

  raj.send("Hey everyone!");
  ali.send("Hi Raj!");
  maria.send("Good morning Raj!", raj);
}
