  Feature: Login functionality

  Background:
  Given user navigates successfully to website

  Scenario Outline: Login to site with valid credentials
  When user enters '<validUserName>' and '<validPassword>'
  And user clicks on login button
  Then user should be redirected to site homepage
    Examples:
        | validUserName | validPassword |
        | standard_user | secret_sauce  |

  Scenario Outline: Login to site with invalid credentials
  When user enters '<UserName>' and '<Password>'
  And user clicks on login button
  Then user cannot login and 'Username and password do not match' should display
    Examples:
        | UserName      | Password     |
        | standard_user | invalid      |
        | invalid       | secret_sauce |
        | invalid       | invalid      |


  Scenario Outline: Login to site with empty credentials
  When user enters '<UserName>' and '<Password>'
  And user clicks on login button
  Then user cannot login and '<errorMsg>' should display
  
    Examples:
        | UserName      | Password     | errorMsg             |
        | standard_user |              | Password is required |
        |               | secret_sauce | Username is required |
        |               |              | Username is required |