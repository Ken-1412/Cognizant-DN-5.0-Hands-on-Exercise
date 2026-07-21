# 🟢 Spring REST Hands-on

> This is where I got my hands dirty building REST APIs from scratch. No security yet — just pure Spring Boot API development.

---

## 🎯 What's This Project About?

I built two REST APIs:

### 1. 👥 Employee REST API
Everything you need to manage employees — create, read, update, delete.

**What I created:**
- `Employee` model → The data structure (id, name, salary, department)
- `Department` model → Each employee belongs to a department
- `EmployeeDAO` → Handles data storage
- `EmployeeService` → Business logic layer
- `EmployeeController` → The API endpoints
- Exception handling → Graceful error responses

### 2. 🌍 Country REST API
A simpler API for practice — list countries and search by code.

**What I created:**
- `Country` model → Country name and code
- `CountryDAO` → Data access
- `CountryService` → Business logic
- `CountryController` → API endpoints

---

## 🏗️ Project Structure

```
spring-rest-handson/
│
├── src/main/java/
│   └── com/example/
│       ├── model/          ← Data classes (Employee, Department, Country)
│       ├── dao/            ← Data access layer
│       ├── service/        ← Business logic
│       └── controller/     ← REST API endpoints
│
├── pom.xml                 ← Maven dependencies
├── mvnw / mvnw.cmd         ← Maven wrapper (run without installing Maven)
└── HELP.md
```

---

## 🧭 How to Run

1. **Open** this folder in IntelliJ IDEA
2. **Wait** for Maven to download dependencies (bottom-right progress bar)
3. **Run** the main `@SpringBootApplication` class
4. **Open** your browser and go to: `http://localhost:8080/employees`
5. **See** JSON data in your browser! 🎉

> 💡 **Better way to test:** Download [Postman](https://www.postman.com/) — it lets you send GET, POST, PUT, DELETE requests easily.

---

## ✍️ Author

**Ketan Singh**