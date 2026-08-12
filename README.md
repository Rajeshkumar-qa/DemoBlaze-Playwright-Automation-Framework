DemoBlaze Playwright Automation Framework

A professional Playwright + TypeScript automation framework for testing the DemoBlaze e-commerce application.

The framework is designed using the Page Object Model (POM) pattern and includes Allure reporting, reusable test data, and maintainable test automation practices.

## 📌 Project Overview

This project automates key functional scenarios of the DemoBlaze application, including:

User registration

User login

Negative login scenarios

Product selection

Add to cart

Product purchase

Logout

Basic UI validations

The framework focuses on readability, reusability, maintainability, and reliable test execution.

## 🛠️ Tech Stack

Technology

Purpose

Playwright

Web UI automation

TypeScript

Programming language

Node.js

Runtime environment

Allure

Test reporting

Page Object Model

Framework design pattern

JSON

Test data management

Git / GitHub

Version control

## 🏗️ Framework Architecture

DemoBlaze-Playwright/
│
├── pages/
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── PlaceOrderPage.ts
│   ├── ProductPage.ts
│   └── SignUpPage.ts
│
├── tests/
│   ├── demo.spec.ts
│   ├── signup.spec.ts
│   ├── login.spec.ts
│   └── cart.spec.ts
│
├── test-data/
│   └── users.json
│
├── utils/
│   └── testData.ts
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

**Page Objects**

Page classes contain locators and reusable actions for each application area.

**Tests**

Test specifications contain the actual test scenarios and assertions.

**Test Data**

Reusable credentials and test data are maintained separately from the test logic.

**Utilities**

Common helper functions are maintained separately to avoid duplication.

## 🧪 Test Coverage

Test Case

Scenario

TC01        Sign Up with valid data
TC02        Sign Up and close the modal
TC03        Login with valid credentials
TC04        Login with invalid username and valid password
TC05        Login with valid username and invalid password
TC06        Login with invalid username and invalid password
TC07        Login and add product to cart
TC08        Purchase a phone
TC09        Purchase a monitor
TC10        Login with valid credentials and logout

**Current TypeScript suite: 10 automated tests — all passing.**

## ⚙️ Prerequisites

Make sure the following are installed:

Node.js
npm
Git

Verify the installations:

node --version
npm --version
git --version

## 🚀 Installation

Clone the repository:

git clone <https://github.com/Rajeshkumar-qa/DemoBlaze-Playwright-Automation-Framework.git>

Navigate to the project: cd DemoBlaze-Playwright

Install dependencies: npm install

Install Playwright browsers if required: npx playwright install

## ▶️ Running Tests

**Run all tests**

npx playwright test

**Run tests in headed mode**

npx playwright test --headed

**Run a specific test file**

npx playwright test tests/login.spec.ts

**Run a specific test case**

npx playwright test --grep "TC03"

**Run using the Playwright configuration**

npx playwright test --config=playwright.config.ts

## 📊 Allure Reporting

This project uses **Allure** for detailed test reporting.

**Generate the Allure report**

npx allure generate allure-results --clean

**Open the report**

npx allure open allure-report

The Allure report provides:

Test execution status
Test steps
Test duration
Failed test details
Screenshots
Videos
Error information
Test categorization

Generated report folders are intentionally excluded from Git using .gitignore.

## 🧩 Page Object Model

The framework follows the Page Object Model (POM) design pattern.

For example:

LoginPage.ts
    ↓
Locators
    ↓
Reusable login methods
    ↓
Test specification

This approach helps:

Reduce duplicate code
Centralize locators
Improve maintainability
Improve test readability
Make application changes easier to manage

## 🔍 Testing Practices Demonstrated

This project demonstrates practical QA automation concepts including:

Functional testing
Positive testing
Negative testing
UI validation
Authentication testing
E-commerce workflow testing
Cart validation
End-to-end testing
Page Object Model
Test data separation
Reusable methods
Assertions
JavaScript dialog handling
Allure test reporting

## 📁 Git Ignore

The following generated or local files are excluded from version control:

node_modules/
test-results/
playwright-report/
blob-report/
allure-results/
allure-report/
.env
.vscode/

## 🎯 Future Enhancements

Potential improvements for the framework include:

GitHub Actions CI/CD integration
Cross-browser execution
Parallel execution optimization
Environment-based configuration
Additional API testing
Improved test data management
Retry and trace configuration
Automated Allure report publishing

##👨‍💻 Author

Rajesh Kumar M