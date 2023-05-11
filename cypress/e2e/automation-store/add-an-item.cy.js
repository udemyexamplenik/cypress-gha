/// <reference types = "Cypress" />

describe("Automation store e2e", () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
    })
    it("Add an item", () => {
        cy.get('span.label-orange').eq(1).invoke('text').then((n) => {
            expect(n).to.contain(0)
        })
        cy.contains('.prdocutname', 'Bronzer').click()
        cy.get('.cart').click()
        cy.get('span.label-orange').eq(1).invoke('text').then((n) => {
            expect(n).to.contain(1)
        })
        cy.get('.fa-trash-o').click()
        cy.get('span.label-orange').eq(1).invoke('text').then((n) => {
            expect(n).to.contain(0)
        })
    })
})