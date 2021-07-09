Feature: validating the login Elements


@smoke
Scenario: validating if the login element are present

Given user is on the login page

When user should be able to type user name
When user should be able to type the password
When user should be able to click on login

Then user should be in the user homepage