# 🧪 Module 4 — Test Driven Development & Logging

> **In simple words:** Imagine building a bridge and NEVER testing if it can hold weight. Scary, right? That's what shipping code without tests is like. This module taught me how to write tests FIRST, then write code — and how to log everything so I can debug problems easily.

---

## 🎯 Why Testing & Logging Matter

Let's be real — nobody *loves* writing tests. But here's what changed my mind:

```
  Without Tests:
  ─────────────
  Write code → Ship it → User finds bug → Panic → Fix it → Repeat 😰

  With Tests (TDD):
  ─────────────
  Write test → Write code → Test passes → Ship with confidence 😎
```

And logging? Think of it as your app's **diary**. When something breaks at 3 AM, the logs tell you exactly what happened.

---

## 🛠️ Tech Stack for This Module

| Tool | Version | What It Does |
|------|---------|-------------|
| ☕ **Java** | — | The programming language |
| 📦 **Maven** | — | Manages dependencies (libraries) |
| 🧪 **JUnit** | 4.13.2 | The testing framework — runs your tests |
| 🎭 **Mockito** | 4.11.0 | Creates fake objects for testing in isolation |
| 📝 **SLF4J** | 1.7.30 | A logging interface (the "what") |
| 📋 **Logback** | 1.2.3 | The actual logger that writes logs (the "how") |

---

## Part 1: JUnit — Writing Tests ✅

### Exercise 01 — Setting Up JUnit

> **What I did:** Configured JUnit in a Maven project and ran my very first test.

It's like checking that your oven works before you start baking. Simple but essential.

---

### Exercise 02 — Basic Calculator Tests

> **What I did:** Wrote tests for a `Calculator` class (add, subtract).

```java
// The test says: "2 + 3 should equal 5"
assertEquals(5, calculator.add(2, 3));

// If it doesn't? The test FAILS and tells me exactly what went wrong.
```

---

### Exercise 03 — JUnit Assertions (The Toolbox)

> **What I did:** Explored all the ways JUnit lets you check things:

| Assertion | What It Checks | Example |
|-----------|---------------|---------|
| `assertEquals(a, b)` | Are these two values equal? | `assertEquals(5, result)` |
| `assertTrue(x)` | Is this condition true? | `assertTrue(age > 18)` |
| `assertFalse(x)` | Is this condition false? | `assertFalse(list.isEmpty())` |
| `assertNull(x)` | Is this value null? | `assertNull(deletedUser)` |
| `assertNotNull(x)` | Is this value NOT null? | `assertNotNull(response)` |

---

### Exercise 04 — AAA Pattern & Setup/Teardown

> **What I did:** Learned the professional way to structure tests:

```
┌─────────────────────────────────┐
│         AAA PATTERN             │
│─────────────────────────────────│
│  ARRANGE  → Set up test data   │
│  ACT      → Call the method    │
│  ASSERT   → Check the result   │
└─────────────────────────────────┘
```

Also learned:
- `@Before` → Runs BEFORE each test (setup)
- `@After` → Runs AFTER each test (cleanup)

I tested a `BankAccount` class — deposit, withdraw, check balance.

> 📁 **All JUnit code:** `src/test/java/JUnit_Exercises/`

---

## Part 2: Mockito — Faking Dependencies 🎭

> **Why mock?** Sometimes your code depends on things you can't control — a database, an API, a payment gateway. Mocking lets you create **fake versions** so you can test YOUR code in isolation.

### Exercise 01 — Mocking & Stubbing

> Created fake objects and told them what to return:
```java
when(mockService.getPrice("laptop")).thenReturn(50000);
// Now the mock pretends the laptop costs ₹50,000
```

### Exercise 02 — Verifying Interactions

> Checked that a method was actually called:
```java
verify(mockService).sendEmail("user@email.com");
// "Hey, did you actually send that email?"
```

### Exercise 03 — Argument Matching

> Used flexible matchers like `anyString()` instead of exact values.

### Exercise 04 — Void Methods

> Tested methods that don't return anything (like `deleteUser()`).

### Exercise 05 — Multiple Return Values

> Made a mock return different values on consecutive calls:
```java
when(mockService.getNext()).thenReturn("first").thenReturn("second");
// First call returns "first", second call returns "second"
```

### Exercise 06 — Verifying Order

> Checked that methods were called in a specific sequence.

### Exercise 07 — Exception Handling

> Simulated errors to test how my code handles failures:
```java
doThrow(new RuntimeException("DB down!")).when(mockDB).save(any());
// "What happens when the database crashes?"
```

> 📁 **All Mockito code:** `src/test/java/JUnit_Exercises/` (Exercises 05–11)

---

## Part 3: SLF4J & Logback — Logging 📋

> **The idea:** Instead of `System.out.println()` everywhere (please don't 😅), use a proper logging framework.

### Exercise 01 — Log Levels

Different levels for different situations:

```
TRACE  → Very detailed debugging (usually off in production)
DEBUG  → Helpful during development
INFO   → General application events ("Server started")
WARN   → Something unexpected but not fatal ("Disk 80% full")
ERROR  → Something broke! ("Database connection failed")
```

### Exercise 02 — Parameterized Logging

Instead of ugly string concatenation:
```java
// ❌ Don't do this:
logger.info("User " + name + " logged in at " + time);

// ✅ Do this:
logger.info("User {} logged in at {}", name, time);
```

### Exercise 03 — Appenders (Where Logs Go)

Configured **Logback** to send logs to multiple destinations:
- 🖥️ **ConsoleAppender** → Logs appear in your terminal
- 📄 **FileAppender** → Logs are saved to a file for later analysis

> 📁 **All Logging code:** `src/main/java/SLF4J_Exercises/`

---

## 🧭 How to Run

1. **Open** this module in **IntelliJ IDEA**
2. For **tests:** Right-click on `src/test/java` → **Run All Tests**
3. For **logging exercises:** Run the main files in `src/main/java/SLF4J_Exercises/`
4. **Check:** Test results in the test runner panel, logs in the console

> 💡 **Tip:** If Maven dependencies aren't loading, right-click `pom.xml` → **Maven** → **Reload Project**

---

## 💡 What I Took Away

- Write tests **before** code (TDD) — it forces you to think about what your code should DO before how it does it
- **Mocking** is essential when testing code that depends on databases, APIs, or external services
- Stop using `System.out.println()` — use SLF4J with Logback for proper logging
- Good logs save you HOURS of debugging when things go wrong in production

---

## ✍️ Author

**Ketan Singh**

> *"The first time all my tests turned green, I felt like a real developer. Tests aren't a chore — they're your safety net."*
