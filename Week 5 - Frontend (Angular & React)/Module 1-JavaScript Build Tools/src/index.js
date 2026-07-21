// Example using ES6 features for Babel transpilation

const greeting = (name) => {
  return `Hello, ${name}! Welcome to JavaScript Build Tools (Webpack & Babel).`;
};

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(greeting(this.name));
  }
}

const user = new User("Developer");
user.sayHello();

// Use async/await to test transpilation
const fetchGreeting = async () => {
  const result = await Promise.resolve("Async greeting fetched!");
  console.log(result);
};

fetchGreeting();
