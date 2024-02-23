Feature: Test-case1

    Scenario: Unregistered user in checkout requires account creation or signing in
        Given I am on the home page
        When I click on the WOMEN
        And I click on a product
        And I change the color
        And I click the Add to cart button
        And I click the Proceed to checkout button
        And I click the Proceed to checkout button again
        Then A correct information is displayed

        

