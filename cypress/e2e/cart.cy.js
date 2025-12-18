import { login } from "./login.cy";
// Cenário de adicionar items ao carrinho
describe('Cart', () => {
    login();
    it('Adicionar items ao carrinho', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        // Realizar a compra do carrinho
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type("John");
        cy.get('[data-test="lastName"]').type("Doe");
        cy.get('[data-test="postalCode"]').type("12345");
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
    });
});
