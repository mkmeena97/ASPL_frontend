 class User {
    constructor(name, role) {
      this.name = name;
      this.role = role;
    }
  }

  const raj = new User("Rajeshwari", "Dev Intern");

  const json = JSON.stringify(raj);
  const restored = Object.assign(new User(), JSON.parse(json));

  console.log("Restored Instance:", restored);
  console.log("Is instance of User?", restored instanceof User);