Feature: Test-case4

  @wip4
  Scenario: User should see, that there are no items anymore in the cart
    Given I am on the home page
    When I click on the WOMEN
    And I click on a product
    And I change the color
    And I click the Add to cart button
    And I click the Proceed to checkout button in add to cart page
    And I click the Bin to remove the product
    Then The cart displays that it is empty