<img width="1436" height="760" alt="Screen Shot 2025-07-16 at 12 25 15 AM" src="https://github.com/user-attachments/assets/7810de53-2162-4bc1-ae26-aac34ce31ef8" />
# 🌐 [SauceDemo](https://www.saucedemo.com) Playwright Automation Framework


---

## 🛠 Framework & Language

- 🎭 *Microsoft Playwright*
- 🧠 *JavaScript*

---

## 🎨 Project Design

- ✅ Page Object Model (POM) design pattern
- 📂 Test data is stored in external JSON files
- 📊 Integrated with *Allure Report*
- 🔁 CI/CD pipeline using *GitHub Actions*:
  - Workflows automatically build and test on each pull request

---

## 📦 Project Structure

- .github/workflows/ – CI/CD workflow definitions
- pages/ – Page Object files for each UI page
- tests/ – All test scripts
- testData/ – External test data in JSON format
- playwright.config.ts – Central configuration for Playwright

---

## 📚 Documentation

- 👉 [Microsoft Playwright Docs](https://playwright.dev)

---

## 🚧 Requirements

Before running the project, make sure you have:

- ✅ [Node.js](https://nodejs.org) installed
- ✅ [Visual Studio Code](https://code.visualstudio.com/)
- ✅ [Playwright](https://playwright.dev/) installed via:

## 🚀 Running Tests

1:First, clone the project
   
2:open a terminal on the project root path

3:Run all tests: npx playwright test for more command line refer to playwright Run Command line


## 📄 Allure Report:

1:npm i -D allure-playwright
   
2:allure generate ./allure-results -o ./allure-report --clean

3:allure open ./allure-report

<img width="1436" height="760" alt="Screen Shot 2025-07-16 at 12 25 15 AM" src="https://github.com/user-attachments/assets/bc370a34-0012-48e2-ad2e-780793ab97b3" />
