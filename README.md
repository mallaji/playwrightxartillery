# Playwright: Browser Automation and Testing Framework

Playwright is a testing framework designed to automate interactions with web browsers. It allows developers to create browser tests that mimic user actions such as clicking, typing, and navigating through web pages.

## Initialization

To install Playwright, follow these steps:
1. Open VS Code.
2. Press Ctrl+` to open the terminal.
3. Paste the following command: npm init playwright@latest -- --quiet --browser=chromium --browser=firefox --browser=webkit --gha --template=javascript

## Running Tests

To execute a Playwright test script: npx playwright test ./tests/login.test.js --headed

## Test Recording

To generate Playwright test scripts using code generation:npx playwright codegen


## Running Tests in Specific Environment

To run tests in a specific environment (e.g., test environment):$env:NODE_ENV="test"
npx playwright test ./gibl/logins.test.js --headed

# Artillery: Load Testing Tool

Artillery is a powerful open-source tool used for load testing applications and APIs. It allows developers and QA teams to simulate heavy traffic scenarios and measure the performance of their systems under load. Here’s an overview of Artillery and its key features:

## Key Features of Artillery

### 1. Load Generation
Artillery can generate a large number of virtual users (or "virtual clients") to simulate realistic user traffic. This helps identify performance bottlenecks and how your application scales under different loads.

### 2. Flexible Scenarios
Users can define complex scenarios using YAML or JavaScript to simulate various user behaviors, such as browsing through pages, making API calls, or interacting with forms. This flexibility allows for comprehensive testing of different parts of an application.

### 3. Real-time Metrics
Artillery provides real-time metrics during test execution, including response times, throughput, and error rates. These metrics help in identifying performance issues and monitoring system behavior under load.

### 4. Script Reusability
Test scripts in Artillery are reusable and can be modified easily to simulate different load conditions or scenarios. This makes it convenient to iterate and refine tests as your application evolves.

### 5. Integration with CI/CD
Artillery integrates well with Continuous Integration/Continuous Deployment (CI/CD) pipelines, allowing automated load tests to be run as part of your deployment process. This ensures that performance checks are integrated into your development workflow.

### 6. Reporting and Analysis
Artillery generates detailed HTML reports and JSON output, making it easier to analyze test results and share findings across teams. These reports include graphs and charts to visualize performance metrics over time.


To generate results in JSON files: artillery run artillery.yml --output result.json<br>
To generate HTML reports: artillery report result.json <br>
To run on github: artillery run artillery.yml --record --key a9_M9glNXlQXFHvzOUU42CI76281Yvnic2U<br>
