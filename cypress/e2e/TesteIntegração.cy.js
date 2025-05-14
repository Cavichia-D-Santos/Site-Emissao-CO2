describe('Index', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Deve clicar e se direcionar à página', () => {
        cy.contains('Dados').click();
    });
});
