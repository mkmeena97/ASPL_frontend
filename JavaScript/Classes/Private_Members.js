/*
    - ntroduced with # (ES2022), gives true privacy.
*/

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000
// acc.#balance = 0;  SyntaxError
