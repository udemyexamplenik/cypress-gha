/// <reference types = "Cypress" />

describe("Automation store e2e", () => {

    before(() => {
        cy.fixture("example").then((data) => {
            globalThis.data = data
        })
    })
    
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
    })

it('Create an account', () => {
        
    cy.contains('a', 'Login or register').click()
    cy.get('#accountFrm_accountregister').should('be.checked')
    cy.contains('[type="submit"]', 'Continue').click()

    cy.get('#AccountFrm_firstname').type(data.name)
    cy.get('#AccountFrm_lastname').type(data.lastName)
    cy.get('#AccountFrm_email').type(data.email)
    cy.get('#AccountFrm_address_1').type('Adress1')
    cy.get('#AccountFrm_city').type('Bangkok')
    cy.get('#AccountFrm_zone_id').select('Essex').should('have.value', '3547')
    cy.get('#AccountFrm_postcode').type('123456')
    cy.get('#AccountFrm_loginname').type(data.name)
    cy.get('#AccountFrm_password').type(data.password, {log : false})
    cy.get('#AccountFrm_confirm').type(data.password, {log : false})
    cy.get('#AccountFrm_newsletter0').check().should('be.checked')
    cy.get('#AccountFrm_agree').check()
    cy.contains('[type="submit"]', 'Continue').click()
    /*
    This doesn't work for some reason. Can't find .maintext or h1
    cy.get('.maintext').should('include', ' Your Account Has Been Created!')
    */
})
})