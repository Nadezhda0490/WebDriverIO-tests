Feature: Create new customer account on magento

    @smoke
    Scenario: Successful account creation
        Given I am on the "Create New Customer Account" page
        When I fill the registration form with valid data
        Then I should see the account creation success message "Thank you for registering with Main Website Store."

    Scenario: Account creation with existing email
        Given I am on the "Create New Customer Account" page
        When I fill the registration form with an existing email
        Then I should see the error message "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account."
