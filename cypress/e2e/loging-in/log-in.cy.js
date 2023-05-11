/// <reference types = "Cypress" />

describe('Loging in using UI and API', () => {
    before(() => {
        cy.fixture("example").then(data => {
            globalThis.data = data
        })
    })
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
    })
    it('login and logout using UI', () => {
        cy.contains('#customer_menu_top', 'Login or register').click()
        cy.url().should('contain', 'login')
        cy.get('#loginFrm_loginname').type(data.name)
        cy.get('#loginFrm_password').type(data.password, {log : false})
        cy.contains('button', 'Login').click()
        cy.get('#customernav .menu_text').should('contain', data.name)
        cy.url().should('contain', 'account')
        cy.get('#customernav .menu_text').trigger('mouseover')
        cy.contains('a', 'Logoff').should('be.visible').click()
        cy.get('.maintext').should('contain', 'Logout')
        cy.url().should('contain', 'logout')
    })
})
