Feature: My Account Page

    Scenario: My Account heading is displayed
        Given I am logged in as a registered user
        Then the heading should be visible
        And the heading text should be "My Account"

    @contactInfo
    Scenario: Correct contact Information is displayed
        Given I am logged in as a registered user
        Then the contact information should display the correct user data

    Scenario: The "My Orders" section is present and correctly labeled
        Given I am logged in as a registered user
        Then the My Orders link should be visible
        And the My Orders link text should be "My Orders"
        And the My Orders link should navigate to "/sales/order/history/"