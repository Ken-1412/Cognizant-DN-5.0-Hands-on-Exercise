# 📦 JavaScript Build Tools (Webpack & Babel)

This module demonstrates how to configure and use Webpack and Babel to bundle JavaScript applications and transpile modern ES6+ features into backward-compatible JavaScript.

## 📁 Project Structure

*   `package.json`: Contains project dependencies (Webpack, Babel) and npm scripts.
*   `webpack.config.js`: Webpack configuration file defining entry, output, and loaders.
*   `.babelrc`: Babel configuration specifying the `@babel/preset-env` preset.
*   `src/index.js`: The entry point containing modern ES6 syntax (classes, arrow functions, async/await).

## 🚀 How to Run

1.  Open a terminal in this directory (`Week 5 - Frontend (Angular & React)\Module 1-JavaScript Build Tools`).
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the build process:
    ```bash
    npm run build
    ```
4.  Check the `dist/` folder for the newly generated `bundle.js` file, which contains the transpiled code.
