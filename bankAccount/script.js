

class BankAccount {
    #balance;
  constructor(owner, balance) {
    this.owner = owner;     
    this.#balance = balance; 
  }

   deposit(amount) {
    if (amount < 0) {
      console.log("Cannot deposit a negative amount");
      return; 
    }
    this.#balance = this.#balance + amount; 
  }

  withdraw(amount) {
     if (amount > this.balance) {
      console.log("Insufficient funds");
      return; 
    }
    this.#balance = this.#balance - amount; 
  }

  getBalance() {
    return this.#balance; 
  }
}


const account = new BankAccount("Ali", 100);
account.withdraw(150);
console.log(account.getBalance()); // -50

account.balance = -1000;
console.log(account.getBalance()); 


