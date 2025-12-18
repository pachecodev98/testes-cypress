import { login } from "./login.cy";
describe('Logout', () => {
    login();
    it('Logout do sistema', () => {
        cy.get('[id="react-burger-menu-btn"]').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
});