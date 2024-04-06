class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount} into account ${this.accountNumber}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount} from account number ${this.accountNumber}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Balance: $${this.balance}`);
    }
}
const account1 = new BankAccount(2400001, "Mostafizur Rahman", 500);
const account2 = new BankAccount(2400002, "Sumon Hawladar", 500);

console.log("Initial  Account Information:");
console.log("------------------------------------------------------------------------->");

account1.deposit(200);
account1.withdraw(400);
account1.displayAccountInfo();
console.log(" ");

account2.deposit(100);
account2.withdraw(700); 
account2.displayAccountInfo();



