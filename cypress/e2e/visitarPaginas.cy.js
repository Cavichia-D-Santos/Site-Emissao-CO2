describe('Visitar páginas', () => {
    beforeEach (() => {
        cy.visit('https://pesquisa-emissao-co2.azurewebsites.net/index.html');
        cy.contains('ODS 15: Nossas Escolhas e o Futuro do Planeta');
    });

    it('Navegar até a página de dados', () => {
        cy.visit('https://pesquisa-emissao-co2.azurewebsites.net/index.html');
        cy.get('nav a').contains('Dados').click();
        cy.url().should('include', 'data.html');
    });

    it('Navegar até a página de contato', () => {
        cy.visit('https://pesquisa-emissao-co2.azurewebsites.net/index.html');
        cy.get('nav a').contains('Contato').click();
        cy.url().should('include', 'contato.html');
    });
});