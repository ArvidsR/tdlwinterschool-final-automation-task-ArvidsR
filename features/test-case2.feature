Feature: Test-case2

  @wip
  Scenario: User should be able to search a product using the search box
    Given I am on the home page
    When I enter <text> into Search input field
    And I click the Search button
    Then The correct information is displayed in the products page with the corresponding <text>

    Examples: 
      | text     |
      | "Blouse" |
      | "Dress"  |
