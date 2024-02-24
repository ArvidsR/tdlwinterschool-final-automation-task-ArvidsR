Feature: Test-case1

    Scenario: Unregistered user in checkout requires account creation or signing in
        Given I am on the home page
        When I click on the WOMEN
        And I click on a product
        And I change the color
        And I click the Add to cart button
        # Next 2 steps are NOT the same
        And I click the Proceed to checkout button in add to cart page
        And I click the Proceed to checkout button in cart page 
        Then A correct information is displayed, when I try to proceed to checkout

        

