Feature: sauce demo login

  Scenario Outline: sauce demo login with multiple set of data
    Given user is on the login page
    When user enter " <username>" in the userid text box
    When user enter "<password >"in the password text box
    And user click the login button
    Then user should navigate to the expected "<webpage>"

    Examples: 
      | username                | password     | webpage                                  |
      | standard_user           | secret_sauce | https://www.saucedemo.com/inventory.html |
      | locked_out_user         | secret_sauce | https://www.saucedemo.com/               |
      | problem_user            | secret_sauce | https://www.saucedemo.com/               |
      | performance_glitch_user | secret_sauce | https://www.saucedemo.com/               |
