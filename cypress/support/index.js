beforeEach(() => {
cy.session('mySession', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
})
})