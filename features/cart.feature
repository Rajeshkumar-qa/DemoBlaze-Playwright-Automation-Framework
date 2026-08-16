Feature: Cart and Purchase

  Scenario: Add a phone to cart
    Given I am on the DemoBlaze home page
    When I login with valid credentials
    And I select the Phones category
    And I select the Samsung galaxy s6 product
    And I add the product to cart
    And I open the cart
    Then I should see the Samsung galaxy s6 in the cart

  Scenario: Purchase a phone
    Given I am on the DemoBlaze home page
    When I login with valid credentials
    And I select the Phones category
    And I select the Samsung galaxy s6 product
    And I add the product to cart
    And I open the cart
    And I click Place Order
    And I enter the purchase details
    And I click Purchase
    Then I should see the purchase success message

  Scenario: Purchase a monitor
    Given I am on the DemoBlaze home page
    When I login with valid credentials
    And I select the Monitors category
    And I select the Apple monitor 24 product
    And I add the product to cart
    And I open the cart
    And I click Place Order
    And I enter the purchase details
    And I click Purchase
    Then I should see the purchase success message