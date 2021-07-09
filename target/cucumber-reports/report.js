$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPageLabs.feature");
formatter.feature({
  "line": 1,
  "name": "validating the login Elements",
  "description": "",
  "id": "validating-the-login-elements",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "validating if the login element are present",
  "description": "",
  "id": "validating-the-login-elements;validating-if-the-login-element-are-present",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user should be able to type user name",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should be able to type the password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should be able to click on login",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user should be in the user homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 3928923214,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_should_be_able_to_type_user_name()"
});
formatter.result({
  "duration": 102122868,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_should_be_able_to_type_the_password()"
});
formatter.result({
  "duration": 56237675,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_should_be_able_to_click_on_login()"
});
formatter.result({
  "duration": 78220383,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_should_be_in_the_user_homepage()"
});
formatter.result({
  "duration": 8683358,
  "status": "passed"
});
formatter.uri("SauceData.feature");
formatter.feature({
  "line": 1,
  "name": "sauce demo login",
  "description": "",
  "id": "sauce-demo-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "sauce demo login with multiple set of data",
  "description": "",
  "id": "sauce-demo-login;sauce-demo-login-with-multiple-set-of-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \" \u003cusername\u003e\" in the userid text box",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"\u003cpassword \u003e\"in the password text box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should navigate to the expected \"\u003cwebpage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "sauce-demo-login;sauce-demo-login-with-multiple-set-of-data;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "webpage"
      ],
      "line": 11,
      "id": "sauce-demo-login;sauce-demo-login-with-multiple-set-of-data;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "https://www.saucedemo.com/inventory.html"
      ],
      "line": 12,
      "id": "sauce-demo-login;sauce-demo-login-with-multiple-set-of-data;;2"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "https://www.saucedemo.com/"
      ],
      "line": 13,
      "id": "sauce-demo-login;sauce-demo-login-with-multiple-set-of-data;;3"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce",
        "https://www.saucedemo.com/"
      ],
      "line": 14,
      "id": "sauce-demo-login;sauce-demo-login-with-multiple-set-of-data;;4"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce",
        "https://www.saucedemo.com/"
      ],
      "line": 15,
      "id": "sauce-demo-login;sauce-demo-login-with-multiple-set-of-data;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "sauce demo login with multiple set of data",
  "description": "",
  "id": "sauce-demo-login;sauce-demo-login-with-multiple-set-of-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \" standard_user\" in the userid text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"\u003cpassword \u003e\"in the password text box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should navigate to the expected \"https://www.saucedemo.com/inventory.html\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 3260565584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " standard_user",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_enter_in_the_userid_text_box(String)"
});
formatter.result({
  "duration": 103712573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword \u003e",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_enter_in_the_password_text_box(String)"
});
formatter.result({
  "duration": 56065178,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_click_the_login_button()"
});
formatter.result({
  "duration": 46199858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/inventory.html",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.user_should_navigate_to_the_expected(String)"
});
formatter.result({
  "duration": 4496977,
  "error_message": "java.lang.AssertionError: expected [https://www.saucedemo.com/inventory.html] but found [https://www.saucedemo.com/]\n\tat org.testng.Assert.fail(Assert.java:99)\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:140)\n\tat org.testng.Assert.assertEquals(Assert.java:122)\n\tat org.testng.Assert.assertEquals(Assert.java:629)\n\tat org.testng.Assert.assertEquals(Assert.java:639)\n\tat StepDef.StepDefinitions.user_should_navigate_to_the_expected(StepDefinitions.java:86)\n\tat ✽.Then user should navigate to the expected \"https://www.saucedemo.com/inventory.html\"(SauceData.feature:8)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "sauce demo login with multiple set of data",
  "description": "",
  "id": "sauce-demo-login;sauce-demo-login-with-multiple-set-of-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \" locked_out_user\" in the userid text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"\u003cpassword \u003e\"in the password text box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should navigate to the expected \"https://www.saucedemo.com/\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 3189933543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " locked_out_user",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_enter_in_the_userid_text_box(String)"
});
formatter.result({
  "duration": 100540313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword \u003e",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_enter_in_the_password_text_box(String)"
});
formatter.result({
  "duration": 56127090,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_click_the_login_button()"
});
formatter.result({
  "duration": 47514832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.user_should_navigate_to_the_expected(String)"
});
formatter.result({
  "duration": 4213227,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "sauce demo login with multiple set of data",
  "description": "",
  "id": "sauce-demo-login;sauce-demo-login-with-multiple-set-of-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \" problem_user\" in the userid text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"\u003cpassword \u003e\"in the password text box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should navigate to the expected \"https://www.saucedemo.com/\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 3314178509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " problem_user",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_enter_in_the_userid_text_box(String)"
});
formatter.result({
  "duration": 100792876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword \u003e",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_enter_in_the_password_text_box(String)"
});
formatter.result({
  "duration": 55868864,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_click_the_login_button()"
});
formatter.result({
  "duration": 50476492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.user_should_navigate_to_the_expected(String)"
});
formatter.result({
  "duration": 3123652,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "sauce demo login with multiple set of data",
  "description": "",
  "id": "sauce-demo-login;sauce-demo-login-with-multiple-set-of-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \" performance_glitch_user\" in the userid text box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"\u003cpassword \u003e\"in the password text box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should navigate to the expected \"https://www.saucedemo.com/\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 9904412031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " performance_glitch_user",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_enter_in_the_userid_text_box(String)"
});
formatter.result({
  "duration": 103445335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword \u003e",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_enter_in_the_password_text_box(String)"
});
formatter.result({
  "duration": 53758037,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_click_the_login_button()"
});
formatter.result({
  "duration": 44107935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.saucedemo.com/",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.user_should_navigate_to_the_expected(String)"
});
formatter.result({
  "duration": 3318317,
  "status": "passed"
});
});