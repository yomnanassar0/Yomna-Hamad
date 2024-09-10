import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import loginPage from '../pagesObjects/loginPage';


const login = new loginPage();

 

Given('user navigates successfully to website', () => {

    login.navigateToSite();

});

When('user enters {string} and {string}', (username, password) => {

    login.enterUserName(username);
    login.enterPassword(password);

});

When('user clicks on login button', () => {

    login.clickLoginButton();

});

Then('user should be redirected to site homepage', () => {

    login.validateInsideHomepage();

});

Then('user cannot login and {string} should display', (errorMsg) => {

    login.validateErrorMsg(errorMsg);

});