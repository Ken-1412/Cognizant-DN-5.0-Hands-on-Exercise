# 🌐 Module 7 — Spring REST using Spring Boot 3

> **In simple words:** Every time you open Instagram, check the weather, or order food on Zomato — your phone is talking to a REST API behind the scenes. In this module, I learned to BUILD those APIs using Spring Boot and SECURE them using JWT tokens.

---

## 🎯 What's a REST API Anyway?

Think of it like a **waiter in a restaurant:**

```
  📱 Your Phone (Client)          🍽️ Restaurant (Server)
  ──────────────────────          ──────────────────────
  "I want the menu"      ──GET──→   Here's the menu (JSON)
  "I'll have pizza"    ──POST──→   Order placed! ✅
  "Change to pasta"     ──PUT──→   Order updated! ✅
  "Cancel my order"  ──DELETE──→   Order cancelled! ✅
```

The phone sends a **request**, the server sends back a **response** (usually in JSON format). That's REST in a nutshell!

---

## 📦 What's Inside This Module

I built **two projects** here:

| Project | What It Does | Key Learning |
|---------|-------------|--------------|
| 🟢 [spring-rest-handson](./spring-rest-handson/) | Build basic REST APIs (Employee & Country) | Controllers, Services, JSON |
| 🔐 [JWT-handson](./JWT-handson/) | Secure those APIs with login & tokens | Spring Security, JWT, Filters |

---

## 🟢 Project 1: Spring REST Hands-on

> *"First, let's build the APIs. We'll secure them later."*

### What I Built:

**Employee REST API** — Full CRUD for managing employees:

| HTTP Method | Endpoint | What It Does |
|-------------|----------|-------------|
| `GET` | `/employees` | Get all employees |
| `GET` | `/employees/{id}` | Get one employee by ID |
| `POST` | `/employees` | Add a new employee |
| `PUT` | `/employees/{id}` | Update an employee |
| `DELETE` | `/employees/{id}` | Delete an employee |

**Country REST API** — Practice with a simpler entity:

| HTTP Method | Endpoint | What It Does |
|-------------|----------|-------------|
| `GET` | `/countries` | Get all countries |
| `GET` | `/countries/{code}` | Get country by code |

### The Architecture:

```
  Client Request
       │
       ▼
  ┌─────────────────┐
  │   Controller     │  ← Receives the request, sends the response
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │    Service       │  ← Business logic lives here
  └────────┬────────┘
           │
           ▼
  ┌─────────────────┐
  │    DAO/Repo      │  ← Talks to the database
  └─────────────────┘
```

> 📁 **Explore the code:** [`spring-rest-handson/`](./spring-rest-handson/)

---

## 🔐 Project 2: JWT Authentication Hands-on

> *"Now let's make sure only authorized users can access our APIs."*

### Why Do We Need This?

Without security, anyone can call your API:
```
❌ Without JWT: Anyone can do GET /employees → Sees all data (dangerous!)
✅ With JWT:    Must login first → Get a token → Send token with every request
```

### How JWT Works (Step by Step):

```
  Step 1: User sends username + password
              │
              ▼
  Step 2: Server checks credentials
              │
              ▼
  Step 3: Server generates a JWT token 🎫
              │
              ▼
  Step 4: User stores the token
              │
              ▼
  Step 5: User sends token with every request
              │
              ▼
  Step 6: Server validates the token → ✅ Access granted!
```

### Hands-on Progression:

| # | Hands-on | What I Learned |
|---|----------|---------------|
| 1 | Spring Security Config | Set up security filters and protected routes |
| 2 | Basic Authentication | Simple username/password login |
| 3 | Authentication API | Created `/authenticate` endpoint |
| 4 | Decode Auth Header | How Basic Auth headers are encoded/decoded |
| 5 | JWT Token Generation | Created JWT tokens with expiry time |
| 6 | JWT Filter & Validation | Built a filter that checks tokens on every request |

> 📁 **Explore the code:** [`JWT-handson/`](./JWT-handson/)

---

## 🛠️ Technologies Used

| Tech | Purpose |
|------|---------|
| ☕ Java 17 | Programming language |
| 🌱 Spring Boot | Framework for building the app |
| 🔐 Spring Security | Authentication & authorization |
| 🎫 JWT | Token-based security |
| 📦 Maven | Dependency management |
| 💻 IntelliJ IDEA | IDE |

---

## 🧭 How to Run

### Spring REST Hands-on:
```
1. Open spring-rest-handson/ in IntelliJ
2. Run the main application class
3. Open browser → http://localhost:8080/employees
4. You should see JSON data! 🎉
```

### JWT Hands-on:
```
1. Open JWT-handson/ in IntelliJ
2. Run the main application class
3. Use Postman to:
   a. POST /authenticate with username & password → Get your JWT token
   b. GET /employees with token in Header → Access protected data
```

> 💡 **Tip:** Use Postman for testing APIs. Add the JWT token in the `Authorization` header as `Bearer <your-token>`.

---

## 💡 What I Took Away

- REST APIs are **the backbone** of modern apps — mobile, web, everything talks through APIs
- Spring Boot makes building REST APIs incredibly fast with `@RestController` and `@GetMapping`
- JWT is the industry standard for API security — learn it well, you'll use it everywhere
- Always separate your code into **Controller → Service → Repository** layers

---

## ✍️ Author

**Ketan Singh**

> *"Building my first REST API felt like giving my application a voice. Adding JWT felt like giving it a bodyguard."*
