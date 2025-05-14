describe('Index', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5501/index.html');
    });

    it('Deve clicar e se direcionar à página', () => {
        cy.contains('Dados').click();
    });
});
