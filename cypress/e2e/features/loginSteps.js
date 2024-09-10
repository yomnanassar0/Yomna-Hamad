import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import loginPage from '../../x/pagesObjects/loginPage';


const login = new loginPage();

 

Given('user navigates successfully to website', () => {

    login.navigateToSite();

});