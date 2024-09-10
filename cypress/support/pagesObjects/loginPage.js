class loginPage {

    usernameInput = '#user-name';

    passwordInput = '#password';

    loginButton = '#login-button';

    menuButton = '#react-burger-menu-btn'

    logoutButton = '#logout_sidebar_link'

    productsText = '.title'
 
    errorMsg = "h3[data-test='error']"

    navigateToSite() {

        cy.visit(Cypress.config('baseUrl'));    
        cy.url().should('eq', 'https://www.saucedemo.com/');

    }

 

    enterUserName(username) {

        if(username!='')
            {
        cy.get(this.usernameInput).type(username);
            }
    }

 

    enterPassword(password) {

        if(password!='')
        {
        cy.get(this.passwordInput).type(password);
        }
    }

 

    clickLoginButton() {

        cy.get(this.loginButton).click();

    }

    validateInsideHomepage()
    {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get(this.productsText).should('exist');
        cy.get(this.menuButton).click();
        cy.get(this.logoutButton).should('exist');
        

    }

    validateErrorMsg(msg)
    {
        cy.get(this.errorMsg).should('contain',msg)
    }
}

 

export default loginPage;