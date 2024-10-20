class BankAccount {
    constructor(initialBalance = 0) {
      this.balance = initialBalance;
    }
  
    // Method to deposit money into the account
    deposit(amount) {
      if (amount <= 0) {
        console.log("Deposit amount must be positive.");
        return;
      }
      this.balance += amount;
      console.log(`Successfully deposited $${amount}. New balance: $${this.balance}.`);
    }
  
    // Method to withdraw money from the account
    withdraw(amount) {
      if (amount <= 0) {
        console.log("Withdrawal amount must be positive.");
        return;
      }
      if (this.balance - amount < 0) {
        console.log("Insufficient balance. Cannot withdraw more than the current balance.");
        return;
      }
      this.balance -= amount;
      console.log(`Successfully withdrew $${amount}. New balance: $${this.balance}.`);
    }
  
    // Method to check the current balance
    checkBalance() {
      console.log(`Current balance: $${this.balance}`);
      return this.balance;
    }
  }
  
  // Example usage:
  const myAccount = new BankAccount(100);  // Create an account with an initial balance of $100
  myAccount.checkBalance();                // Check balance: $100
  myAccount.deposit(50);                   // Deposit $50: New balance: $150
  myAccount.withdraw(30);                  // Withdraw $30: New balance: $120
  myAccount.withdraw(200);                 // Attempt to withdraw $200: Error message
  myAccount.checkBalance();                // Check final balance: $120
  