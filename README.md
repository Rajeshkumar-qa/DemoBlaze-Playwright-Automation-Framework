## DemoBlaze Playwright Automation Framework

Playwright automation framework built with TypeScript using the Page Object Model (POM) design pattern.

This project automates the DemoBlaze web application and covers user registration, login, product selection, cart, and purchase workflows.

The framework also includes cross-browser testing, parallel execution, GitHub Actions CI/CD, and Allure reporting.
---

## 🚀 Tech Stack

**Playwright** – UI automation
**TypeScript** – Programming language
**Cucumber BDD** – Behavior-driven testing
**Gherkin** – Feature/scenario definition
**Page Object Model (POM)** – Framework design pattern
**Allure** – Test reporting
**Cucumber HTML Report** – BDD test reporting
**Git & GitHub** – Version control
**GitHub Actions** – CI/CD
**dotenv** – Environment/configuration management
---

## 📌 Application Under Test

DemoBlaze

https://www.demoblaze.com/
---

## 📂 Project Structure

The framework follows the Page Object Model (POM) design pattern.

DemoBlaze-Playwright/ 
│ 
├── .github/ 
│   └── workflows/ 
│       ├── playwright.yml 
│       └── cucumber.yml 
│ 
├── features/ 
│       ├── login.feature 
│       ├── signup.feature 
│       └── cart.feature 
│ 
├── step-definitions/ 
│       ├── login.steps.ts 
│       ├── signup.steps.ts 
│       └── cart.steps.ts 
│ 
├── support/ 
│       ├── hooks.ts 
│       └── world.ts 
│ 
├── pages/ 
│       ├── HomePage.ts 
│       ├── LoginPage.ts 
│       ├── ProductPage.ts 
│       ├── PlaceOrderPage.ts 
│       └── SignUpPage.ts 
│ 
├── tests/ 
│       └── signup.spec.ts 
│       
├── test-data/ 
│ 
├── utils/ 
│       
├── playwright.config.ts 
├── tsconfig.json 
├── package.json 
├── package-lock.json 
├── .env 
├── .gitignore 
└── README.md
---

## 🧪 Test Scenarios

**Sign Up**

TC01 - Sign Up with valid data

TC02 - Sign Up and close the modal

**Login**

TC03 - Login with valid credentials

TC04 - Login with invalid username and valid password

TC05 - Login with valid username and invalid password

TC06 - Login with invalid username and invalid password

TC10 - Login with valid credentials and logout

**Cart & Purchase**

TC07 - Login and add product to cart

TC08 - Purchase a phone

TC09 - Purchase a monitor
---

## 🏗️ Framework Design

The framework follows the Page Object Model (POM) design pattern.

Each application page has a separate Page Object class containing:

Locators
Page actions
Reusable methods

Example:

LoginPage.ts
HomePage.ts
ProductPage.ts
PlaceOrderPage.ts
SignUpPage.ts

Cucumber step definitions call the Page Object methods instead of directly interacting with page locators.
---

## 🥒 Cucumber BDD

The framework uses Cucumber to implement BDD-style tests.

Example feature:

Feature: Login

  Scenario: Login with valid credentials
    Given I am on the DemoBlaze home page
    When I login with valid credentials
    Then I should be logged in successfully

The Gherkin steps are implemented in TypeScript step-definition files.
---

## 🌍 Environment Configuration

Test credentials and environment-specific values are stored using environment variables.

Example .env:

USERNAME=your_username
PASSWORD=your_password

The .env file is excluded from Git using .gitignore to prevent credentials from being committed to the repository.
---

## ▶️ Installation

**Clone the repository:**

git clone https://github.com/Rajeshkumar-qa/DemoBlaze-Playwright-Automation-Framework.git

**Navigate to the project:**

cd DemoBlaze-Playwright-Automation-Framework

**Install dependencies:**

npm ci

**Install Playwright browsers:**

npx playwright install
---

## 🧪 Running Tests

**Run all tests**

npx playwright test

**Run tests in headed mode**

npx playwright test --headed

**Run a specific test file**

npx playwright test tests/login.spec.ts

**Run a specific test**

npx playwright test -g "TC03 - Login with valid credentials"

**Run the complete Cucumber suite:**

npm run cucumber

**The current Cucumber suite contains:**

6 scenarios
51 steps

All scenarios are passing.
---

## 📊 Cucumber HTML Report

The Cucumber execution generates an HTML report.

The report can be opened after execution to review:

Passed scenarios
Failed scenarios
Step execution
Execution duration
---

## 📈 Allure Reporting

**Generate Allure results:**

npx allure generate allure-results --clean -o allure-report

**Open the Allure report:**

npx allure open allure-report

**The Allure report provides detailed information about:**

Test execution
Test status
Steps
Execution time
Failures
Test history
---

## 🔄 GitHub Actions CI/CD

The project is integrated with GitHub Actions.

Workflows are located under:

.github/workflows/

**Playwright CI**

The Playwright workflow:

Checks out the repository
Sets up Node.js
Installs dependencies
Installs Playwright browsers
Executes Playwright tests
Uploads test results/reports

**Cucumber CI**

The Cucumber workflow:

Checks out the repository
Sets up Node.js 24
Installs dependencies
Installs Playwright browsers
Executes Cucumber tests
Generates the Cucumber HTML report
Uploads Cucumber and Allure results

The workflows can be viewed under the **Actions** tab of the GitHub repository.
---

## ⚡ Parallel Execution

Playwright supports parallel test execution using multiple workers.

Example:

npx playwright test --workers=3

Parallel execution helps reduce overall test execution time.
---

## 🔐 Security

Sensitive information such as usernames and passwords should not be committed to GitHub.

Use:

.env

for local credentials and add it to:

.gitignore

For GitHub Actions, sensitive credentials should be stored using GitHub Secrets.
---

## 🧹 Useful Commands

**Install dependencies:**

npm ci

**Run Playwright tests:**

npx playwright test

**Run Cucumber tests:**

npm run cucumber

**Generate Allure report:**

npx allure generate allure-results --clean -o allure-report

**Open Allure report:**

npx allure open allure-report

**Check Git status:**

git status

**Commit changes:**

git add .
git commit -m "Update automation framework"
git push origin main
---

## 🔍 Playwright Reporting

**Playwright generates:**

HTML reports

Screenshots

Videos

Traces

**Open the Playwright HTML report:**

npx playwright show-report
---

## 🧩 Key Framework Features

✅ Playwright automation
✅ TypeScript
✅ Page Object Model
✅ Cucumber BDD
✅ Gherkin feature files
✅ Reusable step definitions
✅ Custom Cucumber World
✅ Cucumber hooks
✅ Environment-based configuration
✅ Cucumber HTML reporting
✅ Allure reporting
✅ GitHub Actions CI/CD
✅ Parallel Playwright execution
✅ Cross-browser automation capability
✅ Git/GitHub integration
---

## 🎯 Testing Approach

Functional Testing

Positive Testing

Negative Testing

Regression Testing

Smoke Testing

End-to-End Testing

Cross-Browser Testing
---

## 👨‍💻 Author

Rajesh Kumar M


GitHub:
https://github.com/Rajeshkumar-qa

LinkedIn:
https://www.linkedin.com/in/rajesh-kumar--m/
