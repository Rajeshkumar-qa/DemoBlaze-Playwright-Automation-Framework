DemoBlaze Playwright Automation Framework

Playwright automation framework built with TypeScript using the Page Object Model (POM) design pattern.

This project automates the DemoBlaze web application and covers user registration, login, product selection, cart, and purchase workflows.

The framework also includes cross-browser testing, parallel execution, GitHub Actions CI/CD, and Allure reporting.

🚀 Tech Stack

Playwright

TypeScript

Node.js

Page Object Model (POM)

Git & GitHub

GitHub Actions

Allure Report

JSON Test Data

📌 Application Under Test

DemoBlaze

https://www.demoblaze.com/

🧪 Test Scenarios

Sign Up

TC01 - Sign Up with valid data

TC02 - Sign Up and close the modal

Login

TC03 - Login with valid credentials

TC04 - Login with invalid username and valid password

TC05 - Login with valid username and invalid password

TC06 - Login with invalid username and invalid password

TC10 - Login with valid credentials and logout

Cart & Purchase

TC07 - Login and add product to cart

TC08 - Purchase a phone

TC09 - Purchase a monitor

🏗️ Framework Architecture

The framework follows the Page Object Model (POM) design pattern.

DemoBlaze-Playwright-Automation-Framework
│
├── .github
│   └── workflows
│       └── Playwright CI/CD workflow
│
├── pages
├── test-data
├── tests
├── utils
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json

📂 Project Structure

pages/

Contains Page Object classes with locators and reusable page actions.

tests/

Contains Playwright test specifications such as:

login.spec.ts
signup.spec.ts
cart.spec.ts

test-data/

Contains test data used by the automation tests.

Avoid committing real or sensitive credentials to a public repository.

utils/

Contains reusable helper functions and utilities.

▶️ Installation

Clone the repository:

git clone https://github.com/Rajeshkumar-qa/DemoBlaze-Playwright-Automation-Framework.git

Navigate to the project:

cd DemoBlaze-Playwright-Automation-Framework

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

🧪 Running Tests

Run all tests

npx playwright test

Run tests in headed mode

npx playwright test --headed

Run a specific test file

npx playwright test tests/login.spec.ts

Run a specific test

npx playwright test -g "TC03 - Login with valid credentials"

🌐 Cross-Browser Testing

The framework supports:

Chromium

Firefox

WebKit

npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

⚡ Parallel Execution

Playwright supports parallel test execution using multiple workers.

Example:

npx playwright test --workers=3

Parallel execution helps reduce overall test execution time.

📊 Allure Reporting

This project uses Allure Report for test execution reporting.

Generate Allure Report

npx allure generate allure-results --clean -o allure-report

Open Allure Report

npx allure open allure-report

The Allure report provides:

Test execution status

Passed and failed tests

Test duration

Browser information

Test suites

Test steps

Screenshots

Videos

Trace information

🔄 CI/CD with GitHub Actions

GitHub Actions is configured to automatically execute the Playwright test suite when changes are pushed to the repository.

CI/CD Flow

Developer
    ↓
Git Push
    ↓
GitHub Repository
    ↓
GitHub Actions
    ↓
Install Dependencies
    ↓
Install Playwright Browsers
    ↓
Run Playwright Tests
    ↓
Generate Allure Report
    ↓
Publish Test Results

🔍 Test Execution Evidence

Playwright generates:

HTML reports

Screenshots

Videos

Traces

Open the Playwright HTML report:

npx playwright show-report

🧩 Key Framework Features

✅ TypeScript

✅ Playwright

✅ Page Object Model

✅ Reusable page methods

✅ Data-driven testing

✅ Functional testing

✅ Positive and negative test scenarios

✅ Cross-browser testing

✅ Parallel test execution

✅ Git version control

✅ GitHub Actions CI/CD

✅ Allure reporting

✅ Screenshots on test failure

✅ Video recording

✅ Playwright trace

✅ HTML test reports

🎯 Testing Approach

Functional Testing

Positive Testing

Negative Testing

Regression Testing

Smoke Testing

End-to-End Testing

Cross-Browser Testing

👨‍💻 Author

Rajesh Kumar M

QA Automation Engineer

GitHub:
https://github.com/Rajeshkumar-qa

LinkedIn:
https://www.linkedin.com/in/rajesh-kumar--m/

📌 Future Enhancements

API automation

Environment-based configuration

Improved test data management

Automated Allure report publishing

Docker execution

Scheduled regression execution

Notifications for CI/CD failures

⭐ Project Highlights

This project demonstrates practical experience in building a maintainable Playwright automation framework using:

Playwright + TypeScript + POM + Cross-Browser Testing + Parallel Execution + GitHub Actions CI/CD + Allure Reporting
