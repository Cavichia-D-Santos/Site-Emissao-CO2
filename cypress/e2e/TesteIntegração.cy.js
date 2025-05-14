describe('Index', () => {
    beforeEach(() => {
        cy.visit('pesquisa-emissao-co2.azurewebsites.net');
    });

    it('Deve clicar e se direcionar à página', () => {
        cy.contains('Dados').click();
    });
});
