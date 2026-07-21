# 🔐 JWT Authentication Hands-on

> This project builds on top of the REST API and adds **security**. No more open access — users must log in and get a token before accessing any data.

---

## 🎯 What Problem Does JWT Solve?

Without JWT:
```
Anyone → GET /employees → 😱 Sees all employee data!
```

With JWT:
```
Step 1: POST /authenticate  → Send username & password
Step 2: Server returns      → A JWT token (looks like a long encoded string)
Step 3: GET /employees       → Send token in the header → ✅ Data returned!
Step 4: GET /employees       → No token? → ❌ 403 Forbidden!
```

---

## 📝 Hands-on Progression

I went through 6 hands-on exercises, each building on the previous:

| # | What I Did | What I Learned |
|---|-----------|---------------|
| **1** | Configured Spring Security | How security filters intercept requests |
| **2** | Basic Authentication | Simple username/password check |
| **3** | Built `/authenticate` API | Created an endpoint for login |
| **4** | Decoded Auth Headers | How Base64 encoding works in headers |
| **5** | Generated JWT Tokens | Created tokens with claims and expiry |
| **6** | Built JWT Filter | A filter that validates tokens on every request |

---

## 🏗️ Project Structure

```
JWT-handson/
│
├── src/main/java/
│   └── com/example/
│       ├── config/         ← Security configuration
│       ├── controller/     ← Auth + protected endpoints
│       ├── filter/         ← JWT validation filter
│       ├── model/          ← User & token models
│       └── util/           ← JWT utility (generate, validate)
│
├── pom.xml
├── mvnw / mvnw.cmd
└── HELP.md
```

---

## 🧭 How to Run & Test

```
1. Open this folder in IntelliJ IDEA
2. Run the main application class
3. Open Postman and:

   a. POST http://localhost:8080/authenticate
      Body (JSON): { "username": "user", "password": "password" }
      → You'll get a JWT token back!

   b. Copy the token

   c. GET http://localhost:8080/employees
      Header: Authorization: Bearer <paste-your-token-here>
      → You'll see the employee data! 🎉

   d. Try WITHOUT the token → You'll get 403 Forbidden ❌
```

> 💡 **The token looks like this:** `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0...`
> It's just Base64 encoded data — you can decode it at [jwt.io](https://jwt.io) to see what's inside!

---

## ✍️ Author

**Ketan Singh**

> *"The moment my API returned 403 without a valid token, I felt like I actually understood web security."*