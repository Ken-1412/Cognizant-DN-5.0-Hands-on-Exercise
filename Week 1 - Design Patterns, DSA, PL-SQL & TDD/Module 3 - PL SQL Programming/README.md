# 🗄️ Module 3 — PL/SQL Programming (Banking System)

> **In simple words:** You know how you use ATMs, transfer money, and check your balance? Someone wrote the code behind all that. In this module, I built a mini banking system entirely using SQL — stored procedures, triggers, functions, and more. No Java needed here, just pure database power.

---

## 🎯 What's the Big Picture?

Think about what happens when you transfer ₹5000 from your account to a friend's:

```
  You click "Transfer"
        │
        ▼
  ┌─────────────────────────┐
  │  1. Check your balance   │  ← Is ₹5000 available?
  │  2. Deduct from you      │  ← Your balance goes down
  │  3. Add to friend        │  ← Friend's balance goes up
  │  4. Log the transaction  │  ← Keep a record
  │  5. If anything fails... │  ← ROLLBACK everything!
  └─────────────────────────┘
```

All of this can be handled **inside the database itself** using PL/SQL. That's what this module is about — making the database do the heavy lifting.

---

## 🛠️ Tools I Used

| Tool | Purpose |
|------|---------|
| 🐬 **MySQL Workbench** | Writing and running SQL scripts |
| 🗄️ **MySQL Server** | The actual database engine |

---

## 🏦 The Database: BankDB

I created a full banking database with these tables:

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Customers   │  │   Accounts   │  │ Transactions │
│──────────────│  │──────────────│  │──────────────│
│ CustomerID   │──│ CustomerID   │  │ TransactionID│
│ Name         │  │ AccountID    │──│ AccountID    │
│ DOB          │  │ Balance      │  │ Amount       │
│ Balance      │  │ AccountType  │  │ Type         │
│ IsVIP        │  └──────────────┘  │ Date         │
└──────────────┘                     └──────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│    Loans     │  │  Employees   │  │   AuditLog   │
│──────────────│  │──────────────│  │──────────────│
│ LoanID       │  │ EmployeeID   │  │ Logs every   │
│ CustomerID   │  │ Name         │  │ change made  │
│ Amount       │  │ Salary       │  │ to the DB    │
│ InterestRate │  │ Department   │  │              │
│ EndDate      │  └──────────────┘  └──────────────┘
└──────────────┘
```

---

## 📝 What I Built (Exercise by Exercise)

### Exercise 1 — Control Structures 🔀

> **Think of it like:** Writing IF-ELSE logic, but inside the database.

What I implemented:
- 👴 **Senior citizen discount** → If customer is 60+, give them a lower interest rate on loans
- ⭐ **VIP promotion** → If account balance > ₹1,00,000, mark them as VIP
- ⏰ **Loan reminders** → Find customers whose loans are due within the next 30 days

> 📁 `Exercises/Exercise 1 - Control Structures.sql`

---

### Exercise 2 — Error Handling 🛡️

> **Think of it like:** What happens when something goes wrong mid-transaction?

What I implemented:
- 💸 **Safe fund transfer** → If deducting money fails, ROLLBACK everything (don't lose anyone's money!)
- 💰 **Salary update validation** → Can't set a negative salary
- 🚫 **Duplicate check** → Don't insert a customer that already exists

> ⚠️ **This is critical in banking** — you NEVER want money to disappear because of a failed operation.

> 📁 `Exercises/Exercise 2 - Error Handling.sql`

---

### Exercise 3 — Stored Procedures 📦

> **Think of it like:** Pre-written functions that the database can run on demand.

What I created:
- 📈 **Monthly interest processing** → Automatically calculates and adds interest to all accounts
- 🎁 **Employee bonus update** → Updates bonuses for all employees in a department
- 💳 **Fund transfer procedure** → A reusable procedure to transfer money between any two accounts

> 💡 **Why stored procedures?** Instead of writing the same SQL again and again, you write it once and just call it like a function: `CALL TransferFunds(acc1, acc2, 5000);`

> 📁 `Exercises/Exercise 3 - Stored Procedures.sql`

---

### Exercise 4 — Functions 🔧

> **Think of it like:** Stored procedures that RETURN a value (like a calculator).

What I created:
- 🎂 **CalculateAge()** → Give it a date of birth, it tells you the age
- 💵 **MonthlyInstallment()** → Give it loan amount and tenure, it tells you the EMI
- ✅ **HasSufficientBalance()** → Check if an account has enough money before processing

> 📁 `Exercises/Exercise 4 - Functions.sql`

---

### Exercise 5 — Triggers ⚡

> **Think of it like:** Automatic reactions. "When THIS happens, do THAT." No one needs to call them — they fire on their own.

What I implemented:
- 📝 **Auto-update timestamp** → Whenever a record is modified, the `LastModified` field updates automatically
- 📋 **Audit trail** → Every transaction is logged in the AuditLog table (who did what, when)
- 🚧 **Business rules** → Prevent withdrawals if balance would go negative

```
  Customer updates their address
            │
            ▼
  TRIGGER fires automatically!
            │
            ▼
  LastModified = NOW()  ← No code needed to do this manually
```

> 📁 `Exercises/Exercise 5 - Triggers.sql`

---

### Exercise 6 — Cursors 🔄

> **Think of it like:** A pointer that walks through results one row at a time. Useful when you need to process each record individually.

What I implemented:
- 📊 **Monthly statements** → Generate a transaction statement for each customer
- 💳 **Maintenance fees** → Deduct annual maintenance fee from every account
- 📈 **Interest rate updates** → Apply new interest rates to all existing loans

> 📁 `Exercises/Exercise 6 - Cursors.sql`

---

### Exercise 7 — Packages (MySQL Style) 📦

> **Note:** MySQL doesn't support Oracle-style packages, so I grouped related procedures and functions together to simulate the same concept.

I created three logical "packages":

| Package | What It Does |
|---------|-------------|
| **Customer Management** | Add, update, and check customer balances |
| **Employee Management** | Hire employees, update details, calculate salary |
| **Account Operations** | Open accounts, close accounts, check total balance |

> 📁 `Exercises/Exercise 7 - Packages.sql`

---

## 🧭 How to Run Everything

Follow these steps in order:

```
Step 1:  Open MySQL Workbench and connect to your server
Step 2:  Run  01_DatabaseSetup.sql     ← Creates the database and tables
Step 3:  Run exercises one by one      ← Each .sql file in the Exercises/ folder
Step 4:  Check the results!            ← Use SELECT queries to verify
```

> 💡 **Tip:** After running each exercise, do a quick `SELECT * FROM AuditLog;` to see the audit trail. It's satisfying to see everything being tracked!

---

## 💡 What I Took Away

- SQL isn't just SELECT and INSERT — there's **real programming** you can do inside databases
- **Error handling** in SQL is critical — especially for banking and finance
- **Triggers** are incredibly powerful — they run automatically without any application code
- Stored procedures make your code **reusable and maintainable**
- Understanding PL/SQL makes you a much better backend developer

---

## ✍️ Author

**Ketan Singh**

> *"Before this module, SQL was just queries to me. After it, SQL became a programming language."*
