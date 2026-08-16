Feature: Login functionality

  Scenario: Login with valid credentials
    Given I am on the DemoBlaze home page
    When I login with valid credentials
    Then I should be logged in successfully