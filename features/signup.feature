Feature: DemoBlaze Sign Up

  Scenario: Sign Up with valid data
    Given I am on the DemoBlaze home page
    When I open the sign up modal
    And I enter valid sign up details
    And I submit the sign up form
    Then I should see the sign up success message

  Scenario: Open and close the sign up modal
    Given I am on the DemoBlaze home page
    When I open the sign up modal
    And I close the sign up modal
    Then the sign up modal should be closed