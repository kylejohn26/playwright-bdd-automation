# Playwright-BDD-Automation

## Overview

Welcome to **Playwright-BDD-Automation** by Kyle John Collo.
This project leverages the power of [Playwright](https://playwright.dev/) and Showcasing BDD framework to create a robust, scalable automation suite. The framework follows the Page Object Model (POM) design pattern and utilizes fixtures to manage test data and state, ensuring clean and maintainable test code.

## Features

- **Playwright Integration**: Harness the capabilities of Playwright for high-performance browser automation.
- **BDD Framework**: Implement Behavior-Driven Development (BDD) with Playwright BDD for clear and human-readable test scenarios.
- **Page Object Model (POM)**: Maintainable and reusable code structure using the Page Object Model.
- **Fixtures Support**: Simplified setup and teardown with fixtures for better test isolation and reusability.
- **Parallel Test Execution**: Run tests in parallel to save time and get faster feedback.
- **Retry Mechanism**: Automatically retry failed tests to increase the reliability of the test suite.
- **Comprehensive Reporting**: Generate detailed HTML reports for test execution results.
- **Cross-Browser Testing**: Test on different browsers and devices to ensure cross-browser compatibility.

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**:
git clone https://github.com/kylejohn26/playwright-bdd-automation.git
cd playwright-bdd-automation
2. **Install dependencies:**:
npm install

### Configuration

This project is configured to handle different test setups and environments, supporting various browsers and devices. Below are some key configurations:

Playwright Configuration (playwright.config.ts)
The configuration supports parallel test execution, retries on CI, HTML reporting, trace, screenshot, and video recording on first retries.

### Scripts
The following scripts are available in the package.json file:

- Run all tests: npm test
- Generate BDD steps: npm run bddgen
- Clean generated files: npm run clean
- Run Playwright tests: npm run playwright-test