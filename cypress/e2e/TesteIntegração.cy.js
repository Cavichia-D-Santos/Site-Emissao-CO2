describe('Index', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('Deve clicar e se direcionar à página', () => {
        cy.contains('Dados').click();
    });
});
