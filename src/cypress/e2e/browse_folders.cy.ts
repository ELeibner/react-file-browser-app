/// <reference types="cypress" />

describe('Integration', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('should navigate and browse the files and folders', () => {
        cy.get('[data-testid="folder-item-1"]').click();

        cy.url().should('include', '/folder/1');
        cy.get('[data-testid="folder-item-3"]').should('be.visible');
        cy.get('[data-testid="file-item-4"]').should('be.visible');
        cy.get('[data-testid="file-item-5"]').should('be.visible');

        cy.get('[data-testid="arrow-back-icon"').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });
});

export {};
