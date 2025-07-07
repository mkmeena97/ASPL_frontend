class Light {
  turnOn() {
    log("💡 Light is ON");
  }

  turnOff() {
    log("💡 Light is OFF");
  }
}

class LightOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }

  undo() {
    this.light.turnOff();
  }
}

class LightOffCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }

  undo() {
    this.light.turnOn();
  }
}

class RemoteControl {
  constructor() {
    this.command = null;
    this.history = [];
  }

  setCommand(command) {
    this.command = command;
  }

  pressOn() {
    this.setCommand(new LightOnCommand(light));
    this.command.execute();
    this.history.push(this.command);
  }

  pressOff() {
    this.setCommand(new LightOffCommand(light));
    this.command.execute();
    this.history.push(this.command);
  }

  undo() {
    const lastCommand = this.history.pop();
    if (lastCommand) {
      lastCommand.undo();
    } else {
      log("⚠️ Nothing to undo");
    }
  }
}

function log(msg) {
  document.getElementById("output").textContent += msg + "\n";
}

const light = new Light();
const remote = new RemoteControl();
