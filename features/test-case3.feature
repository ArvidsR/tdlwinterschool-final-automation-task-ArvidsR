Feature: Test-case3

  @wip3
  Scenario: User should correctly see the number of items added on the cart
    Given I am on the home page
    When I click on the WOMEN
    And I click on a product
    And I change the color
    And I click the Add to cart button
    And I click the Cross button
    Then The number of items on the cart increases by 1
