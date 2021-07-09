$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginPageLabs.feature");
formatter.feature({
  "line": 1,
  "name": "validating the login Elements",
  "description": "",
  "id": "validating-the-login-elements",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "validating if the login element are present",
  "description": "",
  "id": "validating-the-login-elements;validating-if-the-login-element-are-present",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user should be able to type user name",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to type the password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be able to click on login",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should be in the user homepage",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});